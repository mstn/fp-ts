import { ApplicativeComposition02, ApplicativeComposition12, ApplicativeComposition22 } from './Applicative';
import { Either, URI } from './Either';
import { HKT, Type, Type2, URIS, URIS2 } from './HKT';
import { Monad, Monad1, Monad2 } from './Monad';
import { Option } from './Option';
/**
 * @since 2.0.0
 */
export interface EitherT<M, E, A> extends HKT<M, Either<E, A>> {
}
/**
 * @since 2.0.0
 */
export interface EitherM<M> extends ApplicativeComposition02<M, URI> {
    readonly chain: <E, A, B>(ma: EitherT<M, E, A>, f: (a: A) => EitherT<M, E, B>) => EitherT<M, E, B>;
    readonly alt: <E, A>(fx: EitherT<M, E, A>, f: () => EitherT<M, E, A>) => EitherT<M, E, A>;
    readonly bimap: <E, A, N, B>(ma: EitherT<M, E, A>, f: (e: E) => N, g: (a: A) => B) => EitherT<M, N, B>;
    readonly mapLeft: <E, A, N>(ma: EitherT<M, E, A>, f: (e: E) => N) => EitherT<M, N, A>;
    readonly fold: <E, A, R>(ma: EitherT<M, E, A>, onLeft: (e: E) => HKT<M, R>, onRight: (a: A) => HKT<M, R>) => HKT<M, R>;
    readonly getOrElse: <E, A>(ma: EitherT<M, E, A>, f: (e: E) => HKT<M, A>) => HKT<M, A>;
    readonly orElse: <E, A, N>(ma: EitherT<M, E, A>, f: (e: E) => EitherT<M, N, A>) => EitherT<M, N, A>;
    readonly swap: <E, A>(ma: EitherT<M, E, A>) => EitherT<M, A, E>;
    readonly rightM: <E, A>(ma: HKT<M, A>) => EitherT<M, E, A>;
    readonly leftM: <E, A>(me: HKT<M, E>) => EitherT<M, E, A>;
    readonly left: <E, A>(e: E) => EitherT<M, E, A>;
    readonly fromOption: <A, E>(ma: Option<A>, onNone: () => E) => EitherT<M, E, A>;
}
/**
 * @since 2.0.0
 */
export declare type EitherT1<M extends URIS, E, A> = Type<M, Either<E, A>>;
/**
 * @since 2.0.0
 */
export interface EitherM1<M extends URIS> extends ApplicativeComposition12<M, URI> {
    readonly chain: <E, A, B>(ma: EitherT1<M, E, A>, f: (a: A) => EitherT1<M, E, B>) => EitherT1<M, E, B>;
    readonly alt: <E, A>(fx: EitherT1<M, E, A>, f: () => EitherT1<M, E, A>) => EitherT1<M, E, A>;
    readonly bimap: <E, A, N, B>(ma: EitherT1<M, E, A>, f: (e: E) => N, g: (a: A) => B) => EitherT1<M, N, B>;
    readonly mapLeft: <E, A, N>(ma: EitherT1<M, E, A>, f: (e: E) => N) => EitherT1<M, N, A>;
    readonly fold: <E, A, R>(ma: EitherT1<M, E, A>, onLeft: (e: E) => Type<M, R>, onRight: (a: A) => Type<M, R>) => Type<M, R>;
    readonly getOrElse: <E, A>(ma: EitherT1<M, E, A>, f: (e: E) => Type<M, A>) => Type<M, A>;
    readonly orElse: <E, A, N>(ma: EitherT1<M, E, A>, f: (e: E) => EitherT1<M, N, A>) => EitherT1<M, N, A>;
    readonly swap: <E, A>(ma: EitherT1<M, E, A>) => EitherT1<M, A, E>;
    readonly rightM: <E, A>(ma: Type<M, A>) => EitherT1<M, E, A>;
    readonly leftM: <E, A>(me: Type<M, E>) => EitherT1<M, E, A>;
    readonly left: <E, A>(e: E) => EitherT1<M, E, A>;
    readonly fromOption: <A, E>(ma: Option<A>, onNone: () => E) => EitherT1<M, E, A>;
}
/**
 * @since 2.0.0
 */
export declare type EitherT2<M extends URIS2, L, E, A> = Type2<M, L, Either<E, A>>;
/**
 * @since 2.0.0
 */
export interface EitherM2<M extends URIS2> extends ApplicativeComposition22<M, URI> {
    readonly chain: <L, E, A, B>(ma: EitherT2<M, L, E, A>, f: (a: A) => EitherT2<M, L, E, B>) => EitherT2<M, L, E, B>;
    readonly alt: <L, E, A>(fx: EitherT2<M, L, E, A>, f: () => EitherT2<M, L, E, A>) => EitherT2<M, L, E, A>;
    readonly bimap: <L, E, A, N, B>(ma: EitherT2<M, L, E, A>, f: (e: E) => N, g: (a: A) => B) => EitherT2<M, L, N, B>;
    readonly mapLeft: <L, E, A, N>(ma: EitherT2<M, L, E, A>, f: (e: E) => N) => EitherT2<M, L, N, A>;
    readonly fold: <L, E, A, R>(ma: EitherT2<M, L, E, A>, onLeft: (e: E) => Type2<M, L, R>, onRight: (a: A) => Type2<M, L, R>) => Type2<M, L, R>;
    readonly getOrElse: <L, E, A>(ma: EitherT2<M, L, E, A>, f: (e: E) => Type2<M, L, A>) => Type2<M, L, A>;
    readonly orElse: <L, E, A, N>(ma: EitherT2<M, L, E, A>, f: (e: E) => EitherT2<M, L, N, A>) => EitherT2<M, L, N, A>;
    readonly swap: <L, E, A>(ma: EitherT2<M, L, E, A>) => EitherT2<M, L, A, E>;
    readonly rightM: <L, E, A>(ma: Type2<M, L, A>) => EitherT2<M, L, E, A>;
    readonly leftM: <L, E, A>(me: Type2<M, L, E>) => EitherT2<M, L, E, A>;
    readonly left: <L, E, A>(e: E) => EitherT2<M, L, E, A>;
    readonly fromOption: <L, A, E>(ma: Option<A>, onNone: () => E) => EitherT2<M, L, E, A>;
}
/**
 * @since 2.0.0
 */
export declare function getEitherM<M extends URIS2>(M: Monad2<M>): EitherM2<M>;
export declare function getEitherM<M extends URIS>(M: Monad1<M>): EitherM1<M>;
export declare function getEitherM<M>(M: Monad<M>): EitherM<M>;
