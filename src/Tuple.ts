/**
 * @file Adapted from https://github.com/purescript/purescript-tuples
 */
import { Applicative, Applicative2C } from './Applicative'
import { Apply2C } from './Apply'
import { augment } from './augment'
import { Bifunctor2 } from './Bifunctor'
import { Chain2C } from './Chain'
import { ChainRec2C } from './ChainRec'
import { Comonad2 } from './Comonad'
import { Either } from './Either'
import { Foldable2 } from './Foldable'
import { phantom } from './function'
import { Functor2 } from './Functor'
import { HKT } from './HKT'
import { Monad2C } from './Monad'
import { Monoid } from './Monoid'
import { Semigroup } from './Semigroup'
import { Semigroupoid2 } from './Semigroupoid'
import { Traversable2 } from './Traversable'

declare module './HKT' {
  interface URI2HKT2<L, A> {
    Tuple: [A, L]
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Tuple'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export function fst<A, S>(sa: [A, S]): A {
  return sa[0]
}

/**
 * @since 2.0.0
 */
export function snd<A, S>(sa: [A, S]): S {
  return sa[1]
}

/**
 * @since 2.0.0
 */
export function swap<A, S>(sa: [A, S]): [S, A] {
  return [snd(sa), fst(sa)]
}

/**
 * @since 2.0.0
 */
export function getApply<S>(S: Semigroup<S>): Apply2C<URI, S> {
  return {
    URI,
    _L: phantom,
    map,
    ap: (fab, fa) => [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))]
  }
}

const of = <S>(M: Monoid<S>) => <A>(a: A): [A, S] => {
  return [a, M.empty]
}

/**
 * @since 2.0.0
 */
export function getApplicative<S>(M: Monoid<S>): Applicative2C<URI, S> {
  return {
    ...getApply(M),
    of: of(M)
  }
}

/**
 * @since 2.0.0
 */
export function getChain<S>(S: Semigroup<S>): Chain2C<URI, S> {
  return {
    ...getApply(S),
    chain: (fa, f) => {
      const [b, s] = f(fst(fa))
      return [b, S.concat(snd(fa), s)]
    }
  }
}

/**
 * @since 2.0.0
 */
export function getMonad<S>(M: Monoid<S>): Monad2C<URI, S> {
  return {
    ...getChain(M),
    of: of(M)
  }
}

/**
 * @since 2.0.0
 */
export function getChainRec<S>(M: Monoid<S>): ChainRec2C<URI, S> {
  const chainRec = <A, B>(a: A, f: (a: A) => [Either<A, B>, S]): [B, S] => {
    let result: [Either<A, B>, S] = f(a)
    let acc: S = M.empty
    let s: Either<A, B> = fst(result)
    while (s._tag === 'Left') {
      acc = M.concat(acc, snd(result))
      result = f(s.left)
      s = fst(result)
    }
    return [s.right, M.concat(acc, snd(result))]
  }

  return {
    ...getChain(M),
    chainRec
  }
}

/**
 * @since 2.0.0
 */
export const compose: Semigroupoid2<URI>['compose'] = (ba, al) => [fst(ba), snd(al)]

/**
 * @since 2.0.0
 */
export const map: Functor2<URI>['map'] = (fa, f) => [f(fst(fa)), snd(fa)]

/**
 * @since 2.0.0
 */
export const bimap: Bifunctor2<URI>['bimap'] = (fla, f, g) => [g(fst(fla)), f(snd(fla))]

/**
 * @since 2.0.0
 */
export const mapLeft: Bifunctor2<URI>['mapLeft'] = (fla, f) => [fst(fla), f(snd(fla))]

/**
 * @since 2.0.0
 */
export const extract: Comonad2<URI>['extract'] = fst

/**
 * @since 2.0.0
 */
export const extend: Comonad2<URI>['extend'] = (wa, f) => [f(wa), snd(wa)]

/**
 * @since 2.0.0
 */
export const reduce: Foldable2<URI>['reduce'] = (fa, b, f) => f(b, fst(fa))

/**
 * @since 2.0.0
 */
export const foldMap: Foldable2<URI>['foldMap'] = _ => (fa, f) => f(fst(fa))

/**
 * @since 2.0.0
 */
export const reduceRight: Foldable2<URI>['reduceRight'] = (fa, b, f) => f(fst(fa), b)

/**
 * @since 2.0.0
 */
export const traverse: Traversable2<URI>['traverse'] = <F>(F: Applicative<F>) => <A, S, B>(
  ta: [A, S],
  f: (a: A) => HKT<F, B>
): HKT<F, [B, S]> => {
  return F.map(f(fst(ta)), b => [b, snd(ta)])
}

/**
 * @since 2.0.0
 */
export const sequence: Traversable2<URI>['sequence'] = <F>(F: Applicative<F>) => <A, S>(
  ta: [HKT<F, A>, S]
): HKT<F, [A, S]> => {
  return F.map(fst(ta), a => [a, snd(ta)])
}

/**
 * @since 2.0.0
 */
export const tuple: Semigroupoid2<URI> & Bifunctor2<URI> & Comonad2<URI> & Foldable2<URI> & Traversable2<URI> = {
  URI,
  compose,
  map,
  bimap,
  mapLeft,
  extract,
  extend,
  reduce,
  foldMap,
  reduceRight,
  traverse,
  sequence
}

const { duplicate, extend$, foldMap$, map$, reduce$, reduceRight$, bimap$, compose$, mapLeft$ } = augment(tuple)

export { duplicate, extend$, foldMap$, map$, reduce$, reduceRight$, bimap$, compose$, mapLeft$ }
