import { Applicative, Applicative1, Applicative2, Applicative2C, Applicative3 } from './Applicative';
import { HKT, Type, Type2, Type3, URIS, URIS2, URIS3, URIS4, Type4 } from './HKT';
import { Monad, Monad1, Monad2, Monad2C, Monad3 } from './Monad';
import { Monoid } from './Monoid';
/**
 * @since 2.0.0
 */
export interface Foldable<F> {
    readonly URI: F;
    readonly reduce: <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: HKT<F, A>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: HKT<F, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface Foldable1<F extends URIS> {
    readonly URI: F;
    readonly reduce: <A, B>(fa: Type<F, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Type<F, A>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: Type<F, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface Foldable2<F extends URIS2> {
    readonly URI: F;
    readonly reduce: <L, A, B>(fa: Type2<F, L, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <L, A>(fa: Type2<F, L, A>, f: (a: A) => M) => M;
    readonly reduceRight: <L, A, B>(fa: Type2<F, L, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface Foldable2C<F extends URIS2, L> {
    readonly URI: F;
    readonly _L: L;
    readonly reduce: <A, B>(fa: Type2<F, L, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Type2<F, L, A>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: Type2<F, L, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface Foldable3<F extends URIS3> {
    readonly URI: F;
    readonly reduce: <U, L, A, B>(fa: Type3<F, U, L, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <U, L, A>(fa: Type3<F, U, L, A>, f: (a: A) => M) => M;
    readonly reduceRight: <U, L, A, B>(fa: Type3<F, U, L, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface Foldable4<F extends URIS4> {
    readonly URI: F;
    readonly reduce: <X, U, L, A, B>(fa: Type4<F, X, U, L, A>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <X, U, L, A>(fa: Type4<F, X, U, L, A>, f: (a: A) => M) => M;
    readonly reduceRight: <X, U, L, A, B>(fa: Type4<F, X, U, L, A>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition<F, G> {
    readonly reduce: <A, B>(fga: HKT<F, HKT<G, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: HKT<F, HKT<G, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: HKT<F, HKT<G, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition11<F extends URIS, G extends URIS> {
    readonly reduce: <A, B>(fga: Type<F, Type<G, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Type<F, Type<G, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: Type<F, Type<G, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition12<F extends URIS, G extends URIS2> {
    readonly reduce: <LG, A, B>(fga: Type<F, Type2<G, LG, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <L, A>(fa: Type<F, Type2<G, L, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <LG, A, B>(fa: Type<F, Type2<G, LG, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition12C<F extends URIS, G extends URIS2, LG> {
    readonly reduce: <A, B>(fga: Type<F, Type2<G, LG, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Type<F, Type2<G, LG, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: Type<F, Type2<G, LG, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition21<F extends URIS2, G extends URIS> {
    readonly reduce: <LF, A, B>(fga: Type2<F, LF, Type<G, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <L, A>(fa: Type2<F, L, Type<G, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <LF, A, B>(fa: Type2<F, LF, Type<G, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition2C1<F extends URIS2, G extends URIS, LF> {
    readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Type2<F, LF, Type<G, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <A, B>(fa: Type2<F, LF, Type<G, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition22<F extends URIS2, G extends URIS2> {
    readonly reduce: <LF, LG, A, B>(fga: Type2<F, LF, Type2<G, LG, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <LF, LG, A>(fa: Type2<F, LF, Type2<G, LG, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <LF, LG, A, B>(fa: Type2<F, LF, Type2<G, LG, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * @since 2.0.0
 */
export interface FoldableComposition22C<F extends URIS2, G extends URIS2, LG> {
    readonly reduce: <LF, A, B>(fga: Type2<F, LF, Type2<G, LG, A>>, b: B, f: (b: B, a: A) => B) => B;
    readonly foldMap: <M>(M: Monoid<M>) => <LF, A>(fa: Type2<F, LF, Type2<G, LG, A>>, f: (a: A) => M) => M;
    readonly reduceRight: <LF, A, B>(fa: Type2<F, LF, Type2<G, LG, A>>, b: B, f: (a: A, b: B) => B) => B;
}
/**
 * Returns the composition of two foldables
 *
 * @example
 * import { getFoldableComposition } from 'fp-ts/lib/Foldable'
 * import { array } from 'fp-ts/lib/Array'
 * import { option, some, none } from 'fp-ts/lib/Option'
 * import { monoidString } from 'fp-ts/lib/Monoid'
 *
 * const F = getFoldableComposition(array, option)
 * assert.strictEqual(F.reduce([some('a'), some('b'), some('c')], '', monoidString.concat), 'abc')
 * assert.strictEqual(F.reduce([some('a'), none, some('c')], '', monoidString.concat), 'ac')
 *
 * @since 2.0.0
 */
export declare function getFoldableComposition<F extends URIS2, G extends URIS2, LG>(F: Foldable2<F>, G: Foldable2C<G, LG>): FoldableComposition22C<F, G, LG>;
export declare function getFoldableComposition<F extends URIS2, G extends URIS2>(F: Foldable2<F>, G: Foldable2<G>): FoldableComposition22<F, G>;
export declare function getFoldableComposition<F extends URIS2, G extends URIS, LF>(F: Foldable2C<F, LF>, G: Foldable1<G>): FoldableComposition2C1<F, G, LF>;
export declare function getFoldableComposition<F extends URIS2, G extends URIS>(F: Foldable2<F>, G: Foldable1<G>): FoldableComposition21<F, G>;
export declare function getFoldableComposition<F extends URIS, G extends URIS2, LG>(F: Foldable1<F>, G: Foldable2C<G, LG>): FoldableComposition12C<F, G, LG>;
export declare function getFoldableComposition<F extends URIS, G extends URIS2>(F: Foldable1<F>, G: Foldable2<G>): FoldableComposition12<F, G>;
export declare function getFoldableComposition<F extends URIS, G extends URIS>(F: Foldable1<F>, G: Foldable1<G>): FoldableComposition11<F, G>;
export declare function getFoldableComposition<F, G>(F: Foldable<F>, G: Foldable<G>): FoldableComposition<F, G>;
/**
 * Similar to 'reduce', but the result is encapsulated in a monad.
 *
 * Note: this function is not generally stack-safe, e.g., for monads which build up thunks a la `IO`.
 *
 * @example
 * import { foldM } from 'fp-ts/lib/Foldable'
 * import { option, some } from 'fp-ts/lib/Option'
 * import { make, tree } from 'fp-ts/lib/Tree'
 *
 * const t = make(1, [make(2, []), make(3, []), make(4, [])])
 * assert.deepStrictEqual(foldM(option, tree)(t, 0, (b, a) => (a > 2 ? some(b + a) : some(b))), some(7))
 *
 * @since 2.0.0
 */
export declare function foldM<M extends URIS3, F extends URIS>(M: Monad3<M>, F: Foldable1<F>): <U, L, A, B>(fa: Type<F, A>, b: B, f: (b: B, a: A) => Type3<M, U, L, B>) => Type3<M, U, L, B>;
export declare function foldM<M extends URIS2, F extends URIS>(M: Monad2<M>, F: Foldable1<F>): <L, A, B>(fa: Type<F, A>, b: B, f: (b: B, a: A) => Type2<M, L, B>) => Type2<M, L, B>;
export declare function foldM<M extends URIS2, F extends URIS, L>(M: Monad2C<M, L>, F: Foldable1<F>): <A, B>(fa: Type<F, A>, b: B, f: (b: B, a: A) => Type2<M, L, B>) => Type2<M, L, B>;
export declare function foldM<M extends URIS, F extends URIS>(M: Monad1<M>, F: Foldable1<F>): <A, B>(fa: Type<F, A>, b: B, f: (b: B, a: A) => Type<M, B>) => Type<M, B>;
export declare function foldM<M, F>(M: Monad<M>, F: Foldable<F>): <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => HKT<M, B>) => HKT<M, B>;
/**
 * Fold a data structure, accumulating values in some `Monoid`, combining adjacent elements using the specified separator
 *
 * @example
 * import { intercalate } from 'fp-ts/lib/Foldable'
 * import { monoidString } from 'fp-ts/lib/Monoid'
 * import { make, tree } from 'fp-ts/lib/Tree'
 *
 * const t = make('a', [make('b', []), make('c', []), make('d', [])])
 * assert.strictEqual(intercalate(monoidString, tree)('|', t), 'a|b|c|d')
 *
 * @since 2.0.0
 */
export declare function intercalate<M, F extends URIS3>(M: Monoid<M>, F: Foldable3<F>): <U, L>(sep: M, fm: Type3<F, U, L, M>) => M;
export declare function intercalate<M, F extends URIS2>(M: Monoid<M>, F: Foldable2<F>): <L>(sep: M, fm: Type2<F, L, M>) => M;
export declare function intercalate<M, F extends URIS2, L>(M: Monoid<M>, F: Foldable2C<F, L>): (sep: M, fm: Type2<F, L, M>) => M;
export declare function intercalate<M, F extends URIS>(M: Monoid<M>, F: Foldable1<F>): (sep: M, fm: Type<F, M>) => M;
export declare function intercalate<M, F>(M: Monoid<M>, F: Foldable<F>): (sep: M, fm: HKT<F, M>) => M;
/**
 * Traverse a data structure, performing some effects encoded by an `Applicative` functor at each value, ignoring the
 * final result.
 *
 * @example
 * import { array } from 'fp-ts/lib/Array'
 * import { traverse_ } from 'fp-ts/lib/Foldable'
 * import { io } from 'fp-ts/lib/IO'
 *
 * let log = ''
 * const append = (s: string) => () => (log += s)
 * traverse_(io, array)(['a', 'b', 'c'], append)()
 * assert.strictEqual(log, 'abc')
 *
 * @since 2.0.0
 */
export declare function traverse_<M extends URIS3, F extends URIS>(M: Applicative3<M>, F: Foldable1<F>): <U, L, A, B>(fa: Type<F, A>, f: (a: A) => Type3<M, U, L, B>) => Type3<M, U, L, void>;
export declare function traverse_<M extends URIS2, F extends URIS>(M: Applicative2<M>, F: Foldable1<F>): <L, A, B>(fa: Type<F, A>, f: (a: A) => Type2<M, L, B>) => Type2<M, L, void>;
export declare function traverse_<M extends URIS2, F extends URIS, L>(M: Applicative2C<M, L>, F: Foldable1<F>): <A, B>(fa: Type<F, A>, f: (a: A) => Type2<M, L, B>) => Type2<M, L, void>;
export declare function traverse_<M extends URIS, F extends URIS>(M: Applicative1<M>, F: Foldable1<F>): <A, B>(fa: Type<F, A>, f: (a: A) => Type<M, B>) => Type<M, void>;
export declare function traverse_<M, F>(M: Applicative<M>, F: Foldable<F>): <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<M, B>) => HKT<M, void>;
