import { Alt2C } from './Alt'
import { Applicative2C } from './Applicative'
import { either, Either, isLeft, isRight, left, right, URI } from './Either'
import { phantom } from './function'
import { Monad2C } from './Monad'
import { Monoid } from './Monoid'
import { Semigroup } from './Semigroup'

export function getApplicative<E>(S: Semigroup<E>): Applicative2C<URI, E> {
  return {
    URI,
    _L: phantom,
    map: either.map,
    of: either.of,
    ap: (mab, ma) =>
      isLeft(mab)
        ? isLeft(ma)
          ? left(S.concat(mab.left, ma.left))
          : mab
        : isLeft(ma)
        ? ma
        : right(mab.right(ma.right))
  }
}

/**
 * **Note**: This function is here just to avoid switching to / from `Either`
 *
 * @since 2.0.0
 */
export function getMonad<E>(S: Semigroup<E>): Monad2C<URI, E> {
  return {
    ...getApplicative(S),
    chain: (ma, f) => (isLeft(ma) ? ma : f(ma.right))
  }
}

/**
 * @since 2.0.0
 */
export function getSemigroup<E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<Either<E, A>> {
  return {
    concat: (fx, fy) =>
      isLeft(fx)
        ? isLeft(fy)
          ? left(SE.concat(fx.left, fy.left))
          : fx
        : isLeft(fy)
        ? fy
        : right(SA.concat(fx.right, fy.right))
  }
}

/**
 * @since 2.0.0
 */
export function getMonoid<E, A>(SE: Semigroup<E>, SA: Monoid<A>): Monoid<Either<E, A>> {
  return {
    ...getSemigroup(SE, SA),
    empty: right(SA.empty)
  }
}

/**
 * @since 2.0.0
 */
export function getAlt<E>(S: Semigroup<E>): Alt2C<URI, E> {
  return {
    URI,
    _L: phantom,
    map: either.map,
    alt: (fx, f) => {
      if (isRight(fx)) {
        return fx
      }
      const fy = f()
      return isLeft(fy) ? left(S.concat(fx.left, fy.left)) : fy
    }
  }
}
