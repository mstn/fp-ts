import { Alt3 } from './Alt'
import { augment } from './augment'
import { Bifunctor3 } from './Bifunctor'
import { Either } from './Either'
import { Predicate, Refinement } from './function'
import { IO } from './IO'
import { IOEither } from './IOEither'
import { Monad3 } from './Monad'
import { MonadIO3 } from './MonadIO'
import { MonadTask3 } from './MonadTask'
import { Option } from './Option'
import { Reader } from './Reader'
import { getReaderM } from './ReaderT'
import { Task } from './Task'
import * as TE from './TaskEither'

import TaskEither = TE.TaskEither

const T = getReaderM(TE.taskEither)

declare module './HKT' {
  interface URI2HKT3<U, L, A> {
    ReaderTaskEither: ReaderTaskEither<U, L, A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'ReaderTaskEither'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface ReaderTaskEither<R, E, A> {
  (r: R): TaskEither<E, A>
}

/**
 * @since 2.0.0
 */
export function run<R, E, A>(ma: ReaderTaskEither<R, E, A>, r: R): Promise<Either<E, A>> {
  return ma(r)()
}

/**
 * @since 2.0.0
 */
export function left<E>(e: E): ReaderTaskEither<unknown, E, never> {
  return fromTaskEither(TE.left(e))
}

/**
 * @since 2.0.0
 */
export const right: <A>(a: A) => ReaderTaskEither<unknown, never, A> = T.of

/**
 * @since 2.0.0
 */
export function rightTask<A>(ma: Task<A>): ReaderTaskEither<unknown, never, A> {
  return fromTaskEither(TE.rightTask(ma))
}

/**
 * @since 2.0.0
 */
export function leftTask<E>(me: Task<E>): ReaderTaskEither<unknown, E, never> {
  return fromTaskEither(TE.leftTask(me))
}

/**
 * @since 2.0.0
 */
export const fromTaskEither: <E, A>(ma: TaskEither<E, A>) => ReaderTaskEither<unknown, E, A> = T.fromM

/**
 * @since 2.0.0
 */
export const rightReader: <R, A>(ma: Reader<R, A>) => ReaderTaskEither<R, never, A> = T.fromReader

/**
 * @since 2.0.0
 */
export function leftReader<R, E>(me: Reader<R, E>): ReaderTaskEither<R, E, never> {
  return r => TE.left(me(r))
}

/**
 * @since 2.0.0
 */
export function fromIOEither<E, A>(ma: IOEither<E, A>): ReaderTaskEither<unknown, E, A> {
  return fromTaskEither(TE.fromIOEither(ma))
}

/**
 * @since 2.0.0
 */
export function fromEither<E, A>(ma: Either<E, A>): ReaderTaskEither<unknown, E, A> {
  return fromTaskEither(TE.fromEither(ma))
}

/**
 * @since 2.0.0
 */
export function fromOption<E, A>(ma: Option<A>, onNone: () => E): ReaderTaskEither<unknown, E, A> {
  return fromTaskEither(TE.fromOption(ma, onNone))
}

/**
 * @since 2.0.0
 */
export function rightIO<A>(ma: IO<A>): ReaderTaskEither<unknown, never, A> {
  return fromTaskEither(TE.rightIO(ma))
}

/**
 * @since 2.0.0
 */
export function leftIO<E>(me: IO<E>): ReaderTaskEither<unknown, E, never> {
  return fromTaskEither(TE.leftIO(me))
}

/**
 * @since 2.0.0
 */
export function fromPredicate<E, A, B extends A>(
  refinement: Refinement<A, B>,
  onFalse: (a: A) => E
): (a: A) => ReaderTaskEither<unknown, E, B>
export function fromPredicate<E, A>(
  predicate: Predicate<A>,
  onFalse: (a: A) => E
): (a: A) => ReaderTaskEither<unknown, E, A>
export function fromPredicate<E, A>(
  predicate: Predicate<A>,
  onFalse: (a: A) => E
): (a: A) => ReaderTaskEither<unknown, E, A> {
  const f = TE.fromPredicate(predicate, onFalse)
  return a => fromTaskEither(f(a))
}

/**
 * @since 2.0.0
 */
export function fold<R, E, A, B>(
  ma: ReaderTaskEither<R, E, A>,
  onLeft: (e: E) => Reader<R, Task<B>>,
  onRight: (a: A) => Reader<R, Task<B>>
): Reader<R, Task<B>> {
  return r => TE.fold(ma(r), e => onLeft(e)(r), a => onRight(a)(r))
}

/**
 * @since 2.0.0
 */
export function fold$<R, E, A, B>(
  onLeft: (e: E) => Reader<R, Task<B>>,
  onRight: (a: A) => Reader<R, Task<B>>
): (ma: ReaderTaskEither<R, E, A>) => Reader<R, Task<B>> {
  return ma => fold(ma, onLeft, onRight)
}

/**
 * @since 2.0.0
 */
export function getOrElse<R, E, A>(
  ma: ReaderTaskEither<R, E, A>,
  onLeft: (e: E) => Reader<R, Task<A>>
): Reader<R, Task<A>> {
  return r => TE.getOrElse(ma(r), e => onLeft(e)(r))
}

/**
 * @since 2.0.0
 */
export function getOrElse$<R, E, A>(
  onLeft: (e: E) => Reader<R, Task<A>>
): (ma: ReaderTaskEither<R, E, A>) => Reader<R, Task<A>> {
  return ma => getOrElse(ma, onLeft)
}

/**
 * @since 2.0.0
 */
export function orElse<R, E, A, M>(
  ma: ReaderTaskEither<R, E, A>,
  f: (e: E) => ReaderTaskEither<R, M, A>
): ReaderTaskEither<R, M, A> {
  return r => TE.orElse(ma(r), e => f(e)(r))
}

/**
 * @since 2.0.0
 */
export function orElse$<R, E, A, M>(
  f: (e: E) => ReaderTaskEither<R, M, A>
): (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, M, A> {
  return ma => orElse(ma, f)
}

/**
 * @since 2.0.0
 */
export const ask: <R>() => ReaderTaskEither<R, never, R> = T.ask

/**
 * @since 2.0.0
 */
export const asks: <R, A>(f: (r: R) => A) => ReaderTaskEither<R, never, A> = T.asks

/**
 * @since 2.0.0
 */
export const local: <R, E, A, Q>(ma: ReaderTaskEither<R, E, A>, f: (f: Q) => R) => ReaderTaskEither<Q, E, A> = T.local

/**
 * Data-last version of `local`
 *
 * @since 2.0.0
 */
export function local$<Q, R>(f: (f: Q) => R): <E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<Q, E, A> {
  return ma => local(ma, f)
}

/**
 * @since 2.0.0
 */
export const map: Monad3<URI>['map'] = T.map

/**
 * @since 2.0.0
 */
export const of: Monad3<URI>['of'] = T.of

/**
 * @since 2.0.0
 */
export const ap: Monad3<URI>['ap'] = T.ap

/**
 * @since 2.0.0
 */
export const chain: Monad3<URI>['chain'] = T.chain

/**
 * @since 2.0.0
 */
export const alt: Alt3<URI>['alt'] = (fx, fy) => r => TE.taskEither.alt(fx(r), () => fy()(r))

/**
 * @since 2.0.0
 */
export const bimap: Bifunctor3<URI>['bimap'] = (ma, f, g) => e => TE.taskEither.bimap(ma(e), f, g)

/**
 * @since 2.0.0
 */
export const mapLeft: Bifunctor3<URI>['mapLeft'] = (ma, f) => e => TE.taskEither.mapLeft(ma(e), f)

/**
 * @since 2.0.0
 */
export const readerTaskEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadIO3<URI> & MonadTask3<URI> = {
  URI,
  map,
  of,
  ap,
  chain,
  alt,
  bimap,
  mapLeft,
  fromIO: rightIO,
  fromTask: rightTask
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
} = augment(readerTaskEither)

export { alt$, ap$, apFirst, apFirst$, apSecond, apSecond$, chain$, chainFirst, chainFirst$, map$, bimap$, mapLeft$ }

/**
 * Like `readerTaskEither` but `ap` is sequential
 * @since 2.0.0
 */
export const readerTaskEitherSeq: typeof readerTaskEither = {
  ...readerTaskEither,
  ap: (mab, ma) => T.chain(mab, f => T.map(ma, f))
}
