import { Comonad2 } from './Comonad'
import { Endomorphism } from './function'
import { Functor, Functor1, Functor2, Functor2C, Functor3 } from './Functor'
import { HKT, Type, Type2, Type3, URIS, URIS2, URIS3 } from './HKT'
import { augment } from './augment'

declare module './HKT' {
  interface URI2HKT2<L, A> {
    Store: Store<L, A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Store'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface Store<S, A> {
  readonly peek: (s: S) => A
  readonly pos: S
}

/**
 * Reposition the focus at the specified position
 *
 * @since 2.0.0
 */
export function seek<S, A>(wa: Store<S, A>, s: S): Store<S, A> {
  return { peek: wa.peek, pos: s }
}

/**
 * Reposition the focus at the specified position
 *
 * @since 2.0.0
 */
export function seek$<S>(s: S): <A>(wa: Store<S, A>) => Store<S, A> {
  return wa => seek(wa, s)
}

/**
 * Reposition the focus at the specified position, which depends on the current position
 *
 * @since 2.0.0
 */
export function seeks<S, A>(wa: Store<S, A>, f: Endomorphism<S>): Store<S, A> {
  return { peek: wa.peek, pos: f(wa.pos) }
}

/**
 * Reposition the focus at the specified position, which depends on the current position
 *
 * @since 2.0.0
 */
export function seeks$<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => Store<S, A> {
  return wa => seeks(wa, f)
}

/**
 * Extract a value from a position which depends on the current position
 *
 * @since 2.0.0
 */
export function peeks<S, A>(wa: Store<S, A>, f: Endomorphism<S>): A {
  return wa.peek(f(wa.pos))
}

/**
 * Extract a value from a position which depends on the current position
 *
 * @since 2.0.0
 */
export function peeks$<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => A {
  return wa => peeks(wa, f)
}

/**
 * Extract a collection of values from positions which depend on the current position
 *
 * @since 2.0.0
 */
export function experiment<F extends URIS3>(
  F: Functor3<F>
): <U, L, S, A>(wa: Store<S, A>, f: (s: S) => Type3<F, U, L, S>) => Type3<F, U, L, A>
export function experiment<F extends URIS2>(
  F: Functor2<F>
): <L, S, A>(wa: Store<S, A>, f: (s: S) => Type2<F, L, S>) => Type2<F, L, A>
export function experiment<F extends URIS2, L>(
  F: Functor2C<F, L>
): <S, A>(wa: Store<S, A>, f: (s: S) => Type2<F, L, S>) => Type2<F, L, A>
export function experiment<F extends URIS>(
  F: Functor1<F>
): <S, A>(wa: Store<S, A>, f: (s: S) => Type<F, S>) => Type<F, A>
export function experiment<F>(F: Functor<F>): <S, A>(wa: Store<S, A>, f: (s: S) => HKT<F, S>) => HKT<F, A>
export function experiment<F>(F: Functor<F>): <S, A>(wa: Store<S, A>, f: (s: S) => HKT<F, S>) => HKT<F, A> {
  return (wa, f) => F.map(f(wa.pos), s => wa.peek(s))
}

/**
 * @since 2.0.0
 */
export const map: Comonad2<URI>['map'] = (wa, f) => ({ peek: s => f(wa.peek(s)), pos: wa.pos })

/**
 * @since 2.0.0
 */
export const extract: Comonad2<URI>['extract'] = wa => wa.peek(wa.pos)

/**
 * @since 2.0.0
 */
export const extend: Comonad2<URI>['extend'] = (wa, f) => ({ peek: s => f({ peek: wa.peek, pos: s }), pos: wa.pos })

/**
 * @since 2.0.0
 */
export const store: Comonad2<URI> = {
  URI,
  map,
  extract,
  extend
}

const { duplicate, extend$, map$ } = augment(store)

export { duplicate, extend$, map$ }
