import { Alt1 } from './Alt'
import { Applicative } from './Applicative'
import { ChainRec1 } from './ChainRec'
import { Comonad1 } from './Comonad'
import { Either } from './Either'
import { Foldable1 } from './Foldable'
import { identity as id } from './function'
import { HKT } from './HKT'
import { Monad1 } from './Monad'
import { Eq } from './Eq'
import { Show } from './Show'
import { Traversable1 } from './Traversable'
import { augment } from './augment'

declare module './HKT' {
  interface URI2HKT<A> {
    Identity: Identity<A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Identity'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export type Identity<A> = A

/**
 * @since 2.0.0
 */
export const getShow: <A>(S: Show<A>) => Show<Identity<A>> = id

/**
 * @since 2.0.0
 */
export const getEq: <A>(E: Eq<A>) => Eq<Identity<A>> = id

const chainRec = <A, B>(a: A, f: (a: A) => Either<A, B>): B => {
  let v = f(a)
  while (v._tag === 'Left') {
    v = f(v.left)
  }
  return v.right
}

/**
 * @since 2.0.0
 */
export const map: Monad1<URI>['map'] = (ma, f) => f(ma)

/**
 * @since 2.0.0
 */
export const of: Monad1<URI>['of'] = id

/**
 * @since 2.0.0
 */
export const ap: Monad1<URI>['ap'] = (mab, ma) => mab(ma)

/**
 * @since 2.0.0
 */
export const chain: Monad1<URI>['chain'] = (ma, f) => f(ma)

/**
 * @since 2.0.0
 */
export const alt: Alt1<URI>['alt'] = id

/**
 * @since 2.0.0
 */
export const extract: Comonad1<URI>['extract'] = id

/**
 * @since 2.0.0
 */
export const extend: Comonad1<URI>['extend'] = (wa, f) => f(wa)

/**
 * @since 2.0.0
 */
export const reduce: Foldable1<URI>['reduce'] = (fa, b, f) => f(b, fa)

/**
 * @since 2.0.0
 */
export const foldMap: Foldable1<URI>['foldMap'] = _ => (fa, f) => f(fa)

/**
 * @since 2.0.0
 */
export const reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) => f(fa, b)

/**
 * @since 2.0.0
 */
export const traverse: Traversable1<URI>['traverse'] = <F>(F: Applicative<F>) => <A, B>(
  ta: Identity<A>,
  f: (a: A) => HKT<F, B>
): HKT<F, Identity<B>> => {
  return F.map(f(ta), id)
}

/**
 * @since 2.0.0
 */
export const sequence: Traversable1<URI>['sequence'] = <F>(F: Applicative<F>) => <A>(
  ta: Identity<HKT<F, A>>
): HKT<F, Identity<A>> => {
  return F.map(ta, id)
}

/**
 * @since 2.0.0
 */
export const identity: Monad1<URI> & Foldable1<URI> & Traversable1<URI> & Alt1<URI> & Comonad1<URI> & ChainRec1<URI> = {
  URI,
  map,
  of,
  ap,
  chain,
  reduce,
  foldMap,
  reduceRight,
  traverse,
  sequence,
  alt,
  extract,
  extend,
  chainRec
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
  duplicate,
  extend$,
  foldMap$,
  map$,
  reduce$,
  reduceRight$
} = augment(identity)

export {
  alt$,
  ap$,
  apFirst,
  apFirst$,
  apSecond,
  apSecond$,
  chain$,
  chainFirst,
  chainFirst$,
  duplicate,
  extend$,
  foldMap$,
  map$,
  reduce$,
  reduceRight$
}
