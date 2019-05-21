/**
 * @file `IOEither<E, A>` represents a synchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`. If you want to represent a synchronous computation that never fails, please see `IO`.
 */
import { Alt2 } from './Alt';
import { Bifunctor2 } from './Bifunctor';
import * as E from './Either';
import { Lazy, Predicate, Refinement } from './function';
import { IO } from './IO';
import { Monad2 } from './Monad';
import { MonadIO2 } from './MonadIO';
import { Monoid } from './Monoid';
import { Option } from './Option';
import { Semigroup } from './Semigroup';
declare module './HKT' {
    interface URI2HKT2<L, A> {
        IOEither: IOEither<L, A>;
    }
}
/**
 * @since 2.0.0
 */
export declare const URI = "IOEither";
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI;
/**
 * @since 2.0.0
 */
export interface IOEither<E, A> extends IO<E.Either<E, A>> {
}
/**
 * @since 2.0.0
 */
export declare const left: <L>(l: L) => IOEither<L, never>;
/**
 * @since 2.0.0
 */
export declare const right: <A>(a: A) => IOEither<never, A>;
/**
 * @since 2.0.0
 */
export declare const rightIO: <A>(ma: IO<A>) => IOEither<never, A>;
/**
 * @since 2.0.0
 */
export declare const leftIO: <E>(me: IO<E>) => IOEither<E, never>;
/**
 * @since 2.0.0
 */
export declare const fromEither: <E, A>(ma: E.Either<E, A>) => IOEither<E, A>;
/**
 * @since 2.0.0
 */
export declare function fromOption<E, A>(ma: Option<A>, onNone: () => E): IOEither<E, A>;
/**
 * @since 2.0.0
 */
export declare function fromPredicate<E, A, B extends A>(predicate: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => IOEither<E, B>;
export declare function fromPredicate<E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => IOEither<E, A>;
/**
 * @since 2.0.0
 */
export declare const fold: <E, A, R>(onLeft: (e: E) => IO<R>, onRight: (a: A) => IO<R>) => (ma: IOEither<E, A>) => IO<R>;
/**
 * @since 2.0.0
 */
export declare const getOrElse: <E, A>(f: (e: E) => IO<A>) => (ma: IOEither<E, A>) => IO<A>;
/**
 * @since 2.0.0
 */
export declare function filterOrElse<E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: IOEither<E, A>) => IOEither<E, B>;
export declare function filterOrElse<E, A>(predicate: Predicate<A>, zeonFalsero: (a: A) => E): (ma: IOEither<E, A>) => IOEither<E, A>;
/**
 * @since 2.0.0
 */
export declare const orElse: <E, A, M>(f: (e: E) => IOEither<M, A>) => (ma: IOEither<E, A>) => IOEither<M, A>;
/**
 * @since 2.0.0
 */
export declare const swap: <E, A>(ma: IOEither<E, A>) => IOEither<A, E>;
/**
 * @since 2.0.0
 */
export declare function getSemigroup<E, A>(S: Semigroup<A>): Semigroup<IOEither<E, A>>;
/**
 * @since 2.0.0
 */
export declare function getApplySemigroup<E, A>(S: Semigroup<A>): Semigroup<IOEither<E, A>>;
/**
 * @since 2.0.0
 */
export declare function getApplyMonoid<E, A>(M: Monoid<A>): Monoid<IOEither<E, A>>;
/**
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * @since 2.0.0
 */
export declare function tryCatch<E, A>(f: Lazy<A>, onError: (reason: unknown) => E): IOEither<E, A>;
/**
 * Make sure that a resource is cleaned up in the event of an exception. The
 * release action is called regardless of whether the body action throws or
 * returns.
 *
 * @since 2.0.0
 */
export declare const bracket: <E, A, B>(acquire: IOEither<E, A>, use: (a: A) => IOEither<E, B>, release: (a: A, e: E.Either<E, B>) => IOEither<E, void>) => IOEither<E, B>;
/**
 * @since 2.0.0
 */
export declare const ioEither: Monad2<URI> & Bifunctor2<URI> & Alt2<URI> & MonadIO2<URI>;
