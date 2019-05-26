import { Comonad2C } from './Comonad'
import { phantom, tuple } from './function'
import { Functor2 } from './Functor'
import { Monoid } from './Monoid'
import { augment } from './augment'

declare module './HKT' {
  interface URI2HKT2<L, A> {
    Traced: Traced<L, A>
  }
}

/**
 * @since 2.0.0
 */
export const URI = 'Traced'

/**
 * @since 2.0.0
 */
export type URI = typeof URI

/**
 * @since 2.0.0
 */
export interface Traced<P, A> {
  (p: P): A
}

/**
 * Extracts a value at a relative position which depends on the current value.
 *
 * @since 2.0.0
 */
export function tracks<P>(M: Monoid<P>): <A>(wa: Traced<P, A>, f: (a: A) => P) => A {
  return (wa, f) => wa(f(wa(M.empty)))
}

/**
 * Data-last version of `tracks`
 *
 * @since 2.0.0
 */
export function tracks$<P>(M: Monoid<P>): <A>(f: (a: A) => P) => (wa: Traced<P, A>) => A {
  const tracksM = tracks(M)
  return f => wa => tracksM(wa, f)
}

/**
 * Get the current position
 *
 * @since 2.0.0
 */
export function listen<P, A>(wa: Traced<P, A>): Traced<P, [A, P]> {
  return p => tuple(wa(p), p)
}

/**
 * Get a value which depends on the current position
 *
 * @since 2.0.0
 */
export function listens<P, A, B>(wa: Traced<P, A>, f: (p: P) => B): Traced<P, [A, B]> {
  return p => tuple(wa(p), f(p))
}

/**
 * Data-last version of `listens`
 *
 * @since 2.0.0
 */
export function listens$<P, B>(f: (p: P) => B): <A>(wa: Traced<P, A>) => Traced<P, [A, B]> {
  return wa => listens(wa, f)
}

/**
 * Apply a function to the current position
 *
 * @since 2.0.0
 */
export function censor<P, A>(wa: Traced<P, A>, f: (p: P) => P): Traced<P, A> {
  return p => wa(f(p))
}

/**
 * Data-last version of `censor`
 *
 * @since 2.0.0
 */
export function censor$<P>(f: (p: P) => P): <A>(wa: Traced<P, A>) => Traced<P, A> {
  return wa => censor(wa, f)
}

/**
 * @since 2.0.0
 */
export function getComonad<P>(M: Monoid<P>): Comonad2C<URI, P> {
  function extend<A, B>(wa: Traced<P, A>, f: (wa: Traced<P, A>) => B): Traced<P, B> {
    return p1 => f(p2 => wa(M.concat(p1, p2)))
  }

  function extract<A>(wa: Traced<P, A>): A {
    return wa(M.empty)
  }

  return {
    URI,
    _L: phantom,
    map,
    extend,
    extract
  }
}

/**
 * @since 2.0.0
 */
export const map: Functor2<URI>['map'] = (fa, f) => p => f(fa(p))

/**
 * @since 2.0.0
 */
export const traced: Functor2<URI> = {
  URI,
  map
}

const { map$ } = augment(traced)

export { map$ }
