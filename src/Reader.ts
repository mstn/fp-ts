import { Category2 } from './Category'
import { Choice2 } from './Choice'
import * as E from './Either'
import { identity } from './Identity'
import { Monad2 } from './Monad'
import { Monoid } from './Monoid'
import { Profunctor2 } from './Profunctor'
import { getReaderM } from './ReaderT'
import { Semigroup } from './Semigroup'
import { Strong2 } from './Strong'
import { augment } from './augment'

const T = getReaderM(identity)

declare module './HKT' {
  interface URI2HKT2<L, A> {
    Reader: Reader<L, A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Reader'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface Reader<R, A> {
  (r: R): A
}

/**
 * Reads the current context
 *
 * @since 2.0.0
 */
export const ask: <R>() => Reader<R, R> = T.ask

/**
 * Projects a value from the global context in a Reader
 *
 * @since 2.0.0
 */
export const asks: <R, A>(f: (r: R) => A) => Reader<R, A> = T.asks

/**
 * changes the value of the local context during the execution of the action `ma`
 *
 * @since 2.0.0
 */
export const local: <R, A, Q>(ma: Reader<R, A>, f: (d: Q) => R) => Reader<Q, A> = T.local

/**
 * Data-last version of `local`
 *
 * @since 2.0.0
 */
export function local$<Q, R>(f: (d: Q) => R): <A>(ma: Reader<R, A>) => Reader<Q, A> {
  return ma => local(ma, f)
}

/**
 * @since 2.0.0
 */
export function getSemigroup<R, A>(S: Semigroup<A>): Semigroup<Reader<R, A>> {
  return {
    concat: (x, y) => e => S.concat(x(e), y(e))
  }
}

/**
 * @since 2.0.0
 */
export function getMonoid<R, A>(M: Monoid<A>): Monoid<Reader<R, A>> {
  return {
    concat: getSemigroup<R, A>(M).concat,
    empty: () => M.empty
  }
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
export const promap: Profunctor2<URI>['promap'] = (mbc, f, g) => a => g(mbc(f(a)))

/**
 * @since 2.0.0
 */
export const compose: Category2<URI>['compose'] = (ab, la) => l => ab(la(l))

/**
 * @since 2.0.0
 */
export const id: Category2<URI>['id'] = () => a => a

/**
 * @since 2.0.0
 */
export const first: Strong2<URI>['first'] = pab => ([a, c]) => [pab(a), c]

/**
 * @since 2.0.0
 */
export const second: Strong2<URI>['second'] = pbc => ([a, b]) => [a, pbc(b)]

/**
 * @since 2.0.0
 */
export const left: Choice2<URI>['left'] = <A, B, C>(pab: Reader<A, B>): Reader<E.Either<A, C>, E.Either<B, C>> =>
  E.fold$<A, C, E.Either<B, C>>(a => E.left(pab(a)), E.right)

/**
 * @since 2.0.0
 */
export const right: Choice2<URI>['right'] = <A, B, C>(pbc: Reader<B, C>): Reader<E.Either<A, B>, E.Either<A, C>> =>
  E.fold$<A, B, E.Either<A, C>>(E.left, b => E.right(pbc(b)))

/**
 * @since 2.0.0
 */
export const reader: Monad2<URI> & Profunctor2<URI> & Category2<URI> & Strong2<URI> & Choice2<URI> = {
  URI,
  map,
  of,
  ap,
  chain,
  promap,
  compose,
  id,
  first,
  second,
  left,
  right
}

const {
  ap$,
  apFirst,
  apFirst$,
  apSecond,
  apSecond$,
  chain$,
  chainFirst,
  chainFirst$,
  map$,
  compose$,
  promap$
} = augment(reader)

export { ap$, apFirst, apFirst$, apSecond, apSecond$, chain$, chainFirst, chainFirst$, map$, compose$, promap$ }
