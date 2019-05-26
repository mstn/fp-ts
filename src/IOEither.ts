/**
 * @file `IOEither<E, A>` represents a synchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`. If you want to represent a synchronous computation that never fails, please see `IO`.
 */
import { Alt2 } from './Alt'
import { Bifunctor2 } from './Bifunctor'
import * as E from './Either'
import { getEitherM } from './EitherT'
import { Lazy, Predicate, Refinement } from './function'
import { getSemigroup as getIOSemigroup, IO, io } from './IO'
import { Monad2 } from './Monad'
import { MonadIO2 } from './MonadIO'
import { Monoid } from './Monoid'
import { Option } from './Option'
import { Semigroup } from './Semigroup'

import Either = E.Either
import { augment } from './augment'

const T = getEitherM(io)

declare module './HKT' {
  interface URI2HKT2<L, A> {
    IOEither: IOEither<L, A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'IOEither'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface IOEither<E, A> extends IO<Either<E, A>> {}

/**
 * @since 2.0.0
 */
export const left: <L>(l: L) => IOEither<L, never> = T.left

/**
 * @since 2.0.0
 */
export const right: <A>(a: A) => IOEither<never, A> = T.of

/**
 * @since 2.0.0
 */
export const rightIO: <A>(ma: IO<A>) => IOEither<never, A> = T.rightM

/**
 * @since 2.0.0
 */
export const leftIO: <E>(me: IO<E>) => IOEither<E, never> = T.leftM

/**
 * @since 2.0.0
 */
export const fromEither: <E, A>(ma: Either<E, A>) => IOEither<E, A> = io.of

/**
 * @since 2.0.0
 */
export function fromOption<E, A>(ma: Option<A>, onNone: () => E): IOEither<E, A> {
  return fromEither(E.fromOption(ma, onNone))
}

/**
 * @since 2.0.0
 */
export function fromPredicate<E, A, B extends A>(
  predicate: Refinement<A, B>,
  onFalse: (a: A) => E
): (a: A) => IOEither<E, B>
export function fromPredicate<E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => IOEither<E, A>
export function fromPredicate<E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => IOEither<E, A> {
  const f = E.fromPredicate(predicate, onFalse)
  return a => fromEither(f(a))
}

/**
 * @since 2.0.0
 */
export const fold: <E, A, R>(ma: IOEither<E, A>, onLeft: (e: E) => IO<R>, onRight: (a: A) => IO<R>) => IO<R> = T.fold

/**
 * @since 2.0.0
 */
export function fold$<E, A, R>(onLeft: (e: E) => IO<R>, onRight: (a: A) => IO<R>): (ma: IOEither<E, A>) => IO<R> {
  return ma => fold(ma, onLeft, onRight)
}

/**
 * @since 2.0.0
 */
export const getOrElse: <E, A>(ma: IOEither<E, A>, f: (e: E) => IO<A>) => IO<A> = T.getOrElse

/**
 * @since 2.0.0
 */
export function getOrElse$<E, A>(f: (e: E) => IO<A>): (ma: IOEither<E, A>) => IO<A> {
  return ma => getOrElse(ma, f)
}

/**
 * @since 2.0.0
 */
export function filterOrElse<E, A, B extends A>(
  ma: IOEither<E, A>,
  refinement: Refinement<A, B>,
  onFalse: (a: A) => E
): IOEither<E, B>
export function filterOrElse<E, A>(ma: IOEither<E, A>, predicate: Predicate<A>, onFalse: (a: A) => E): IOEither<E, A>
export function filterOrElse<E, A>(ma: IOEither<E, A>, predicate: Predicate<A>, onFalse: (a: A) => E): IOEither<E, A> {
  return io.map(ma, E.filterOrElse$(predicate, onFalse))
}

/**
 * @since 2.0.0
 */
export function filterOrElse$<E, A, B extends A>(
  refinement: Refinement<A, B>,
  onFalse: (a: A) => E
): (ma: IOEither<E, A>) => IOEither<E, B>
export function filterOrElse$<E, A>(
  predicate: Predicate<A>,
  onFalse: (a: A) => E
): (ma: IOEither<E, A>) => IOEither<E, A>
export function filterOrElse$<E, A>(
  predicate: Predicate<A>,
  onFalse: (a: A) => E
): (ma: IOEither<E, A>) => IOEither<E, A> {
  return ma => filterOrElse(ma, predicate, onFalse)
}

/**
 * @since 2.0.0
 */
export const orElse: <E, A, M>(ma: IOEither<E, A>, f: (e: E) => IOEither<M, A>) => IOEither<M, A> = T.orElse

/**
 * @since 2.0.0
 */
export function orElse$<E, A, M>(f: (e: E) => IOEither<M, A>): (ma: IOEither<E, A>) => IOEither<M, A> {
  return ma => orElse(ma, f)
}

/**
 * @since 2.0.0
 */
export const swap: <E, A>(ma: IOEither<E, A>) => IOEither<A, E> = T.swap

/**
 * @since 2.0.0
 */
export function getSemigroup<E, A>(S: Semigroup<A>): Semigroup<IOEither<E, A>> {
  return getIOSemigroup(E.getSemigroup<E, A>(S))
}

/**
 * @since 2.0.0
 */
export function getApplySemigroup<E, A>(S: Semigroup<A>): Semigroup<IOEither<E, A>> {
  return getIOSemigroup(E.getApplySemigroup<E, A>(S))
}

/**
 * @since 2.0.0
 */
export function getApplyMonoid<E, A>(M: Monoid<A>): Monoid<IOEither<E, A>> {
  return {
    concat: getApplySemigroup<E, A>(M).concat,
    empty: right(M.empty)
  }
}

/**
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * @since 2.0.0
 */
export function tryCatch<E, A>(f: Lazy<A>, onError: (reason: unknown) => E): IOEither<E, A> {
  return () => E.tryCatch(f, onError)
}

/**
 * Make sure that a resource is cleaned up in the event of an exception. The
 * release action is called regardless of whether the body action throws or
 * returns.
 *
 * @since 2.0.0
 */
export function bracket<E, A, B>(
  acquire: IOEither<E, A>,
  use: (a: A) => IOEither<E, B>,
  release: (a: A, e: Either<E, B>) => IOEither<E, void>
): IOEither<E, B> {
  return T.chain(acquire, a =>
    T.chain(io.map(use(a), E.right), e => T.chain(release(a, e), () => (E.isLeft(e) ? T.left(e.left) : T.of(e.right))))
  )
}

/**
 * @since 2.0.0
 */
export const map: Monad2<URI>['map'] = T.map

/**
 * @since 2.0.0
 */
export const of: Monad2<URI>['of'] = T.of

/**
 * @since 2.0.0
 */
export const ap: Monad2<URI>['ap'] = T.ap

/**
 * @since 2.0.0
 */
export const chain: Monad2<URI>['chain'] = T.chain

/**
 * @since 2.0.0
 */
export const alt: Alt2<URI>['alt'] = T.alt

/**
 * @since 2.0.0
 */
export const bimap: Bifunctor2<URI>['bimap'] = T.bimap

/**
 * @since 2.0.0
 */
export const mapLeft: Bifunctor2<URI>['mapLeft'] = T.mapLeft

/**
 * @since 2.0.0
 */
export const ioEither: Monad2<URI> & Bifunctor2<URI> & Alt2<URI> & MonadIO2<URI> = {
  URI,
  map,
  of,
  ap,
  chain,
  alt,
  bimap,
  mapLeft,
  fromIO: rightIO
}

const {
  alt$,
  ap$,
  apFirst,
  apFirst$,
  apSecond,
  apSecond$,
  chain$,
  chainFirst,
  chainFirst$,
  map$,
  bimap$,
  mapLeft$
} = augment(ioEither)

export { alt$, ap$, apFirst, apFirst$, apSecond, apSecond$, chain$, chainFirst, chainFirst$, map$, bimap$, mapLeft$ }
