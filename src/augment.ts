import { Alt, Alt1, Alt2, Alt2C, Alt3 } from './Alt'
import { Apply, Apply1, Apply2, Apply2C, Apply3 } from './Apply'
import { Bifunctor, Bifunctor2, Bifunctor3 } from './Bifunctor'
import { Chain, Chain1, Chain2, Chain2C, Chain3 } from './Chain'
import { Separated } from './Compactable'
import { Either } from './Either'
import { Extend, Extend1, Extend2, Extend2C, Extend3 } from './Extend'
import { Filterable, Filterable1, Filterable2, Filterable2C, Filterable3 } from './Filterable'
import {
  FilterableWithIndex,
  FilterableWithIndex1,
  FilterableWithIndex2,
  FilterableWithIndex2C,
  FilterableWithIndex3,
  PredicateWithIndex,
  RefinementWithIndex
} from './FilterableWithIndex'
import { Foldable, Foldable1, Foldable2, Foldable2C, Foldable3 } from './Foldable'
import {
  FoldableWithIndex,
  FoldableWithIndex1,
  FoldableWithIndex2,
  FoldableWithIndex2C,
  FoldableWithIndex3
} from './FoldableWithIndex'
import { identity, Predicate, Refinement } from './function'
import { Functor, Functor1, Functor2, Functor2C, Functor3 } from './Functor'
import {
  FunctorWithIndex,
  FunctorWithIndex1,
  FunctorWithIndex2,
  FunctorWithIndex2C,
  FunctorWithIndex3
} from './FunctorWithIndex'
import { HKT, HKT2, Type, Type2, Type3, URIS, URIS2, URIS3 } from './HKT'
import { Monoid } from './Monoid'
import { Option } from './Option'
import { Profunctor, Profunctor2, Profunctor2C, Profunctor3 } from './Profunctor'
import { Semigroupoid, Semigroupoid2, Semigroupoid2C, Semigroupoid3 } from './Semigroupoid'

export interface AugmentedFunctor<F> extends Functor<F> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}

export interface AugmentedFunctor1<F extends URIS> extends Functor1<F> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: Type<F, A>) => Type<F, B>
}

export interface AugmentedFunctor2<F extends URIS2> extends Functor2<F> {
  readonly map$: <A, B>(f: (a: A) => B) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
}

export interface AugmentedFunctor2C<F extends URIS2, L> extends Functor2C<F, L> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, L, B>
}

export interface AugmentedFunctor3<F extends URIS3> extends Functor3<F> {
  readonly map$: <A, B>(f: (a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}

export interface AugmentedFunctorWithIndex<F, I> extends AugmentedFunctor<F>, FunctorWithIndex<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}

export interface AugmentedFunctorWithIndex1<F extends URIS, I> extends AugmentedFunctor1<F>, FunctorWithIndex1<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: Type<F, A>) => Type<F, B>
}

export interface AugmentedFunctorWithIndex2<F extends URIS2, I> extends AugmentedFunctor2<F>, FunctorWithIndex2<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
}

export interface AugmentedFunctorWithIndex2C<F extends URIS2, I, L>
  extends AugmentedFunctor2C<F, L>,
    FunctorWithIndex2C<F, I, L> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, L, B>
}

export interface AugmentedFunctorWithIndex3<F extends URIS3, I> extends AugmentedFunctor3<F>, FunctorWithIndex3<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}

export interface AugmentedApply<F> extends AugmentedFunctor<F>, Apply<F> {
  readonly apFirst: <A, B>(fa: HKT<F, A>, fb: HKT<F, B>) => HKT<F, A>
  readonly apSecond: <A, B>(fa: HKT<F, A>, fb: HKT<F, B>) => HKT<F, B>
  readonly ap$: <A>(fa: HKT<F, A>) => <B>(fab: HKT<F, (a: A) => B>) => HKT<F, B>
  readonly apFirst$: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly apSecond$: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, B>
}

export interface AugmentedApply1<F extends URIS> extends AugmentedFunctor1<F>, Apply1<F> {
  readonly apFirst: <A, B>(fa: Type<F, A>, fb: Type<F, B>) => Type<F, A>
  readonly apSecond: <A, B>(fa: Type<F, A>, fb: Type<F, B>) => Type<F, B>
  readonly ap$: <A>(fa: Type<F, A>) => <B>(fab: Type<F, (a: A) => B>) => Type<F, B>
  readonly apFirst$: <B>(fb: Type<F, B>) => <A>(fa: Type<F, A>) => Type<F, A>
  readonly apSecond$: <B>(fb: Type<F, B>) => <A>(fa: Type<F, A>) => Type<F, B>
}

export interface AugmentedApply2<F extends URIS2> extends AugmentedFunctor2<F>, Apply2<F> {
  readonly apFirst: <L, A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond: <L, A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, B>
  readonly ap$: <L, A>(fa: Type2<F, L, A>) => <B>(fab: Type2<F, L, (a: A) => B>) => Type2<F, L, B>
  readonly apFirst$: <L, B>(fb: Type2<F, L, B>) => <A>(fa: Type2<F, L, A>) => Type2<F, L, A>
  readonly apSecond$: <L, B>(fb: Type2<F, L, B>) => <A>(fa: Type2<F, L, A>) => Type2<F, L, B>
}

export interface AugmentedApply2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Apply2C<F, L> {
  readonly apFirst: <A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond: <A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, B>
  readonly ap$: <A>(fa: Type2<F, L, A>) => <B>(fab: Type2<F, L, (a: A) => B>) => Type2<F, L, B>
  readonly apFirst$: <A>(fb: Type2<F, L, A>) => <B>(fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond$: <A>(fb: Type2<F, L, A>) => <B>(fb: Type2<F, L, B>) => Type2<F, L, B>
}

export interface AugmentedApply3<F extends URIS3> extends AugmentedFunctor3<F>, Apply3<F> {
  readonly apFirst: <U, L, A, B>(fab: Type3<F, U, L, (a: A) => B>, fb: Type3<F, U, L, B>) => Type3<F, U, L, A>
  readonly apSecond: <U, L, A, B>(fab: Type3<F, U, L, (a: A) => B>, fb: Type3<F, U, L, B>) => Type3<F, U, L, B>
  readonly ap$: <U, L, A>(fa: Type3<F, U, L, A>) => <B>(fab: Type3<F, U, L, (a: A) => B>) => Type3<F, U, L, B>
  readonly apFirst$: <U, L, B>(fb: Type3<F, U, L, B>) => <A>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly apSecond$: <U, L, B>(fb: Type3<F, U, L, B>) => <A>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}

export interface AugmentedChain<F> extends AugmentedApply<F>, Chain<F> {
  readonly chainFirst: <A, B>(ma: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, A>
  readonly chain$: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, B>
  readonly chainFirst$: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, A>
  readonly flatten: <A>(mma: HKT<F, HKT<F, A>>) => HKT<F, A>
}

export interface AugmentedChain1<F extends URIS> extends AugmentedApply1<F>, Chain1<F> {
  readonly chainFirst: <A, B>(ma: Type<F, A>, f: (a: A) => Type<F, B>) => Type<F, A>
  readonly chain$: <A, B>(f: (a: A) => Type<F, B>) => (ma: Type<F, A>) => Type<F, B>
  readonly chainFirst$: <A, B>(f: (a: A) => Type<F, B>) => (ma: Type<F, A>) => Type<F, A>
  readonly flatten: <A>(mma: Type<F, Type<F, A>>) => Type<F, A>
}

export interface AugmentedChain2<F extends URIS2> extends AugmentedApply2<F>, Chain2<F> {
  readonly chainFirst: <L, A, B>(ma: Type2<F, L, A>, f: (a: A) => Type2<F, L, B>) => Type2<F, L, A>
  readonly chain$: <L, A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly chainFirst$: <L, A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, A>
  readonly flatten: <L, A>(mma: Type2<F, L, Type2<F, L, A>>) => Type2<F, L, A>
}

export interface AugmentedChain2C<F extends URIS2, L> extends AugmentedApply2C<F, L>, Chain2C<F, L> {
  readonly chainFirst: <A, B>(ma: Type2<F, L, A>, f: (a: A) => Type2<F, L, B>) => Type2<F, L, A>
  readonly chain$: <A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly chainFirst$: <A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, A>
  readonly flatten: <A>(mma: Type2<F, L, Type2<F, L, A>>) => Type2<F, L, A>
}

export interface AugmentedChain3<F extends URIS3> extends AugmentedApply3<F>, Chain3<F> {
  readonly chainFirst: <U, L, A, B>(ma: Type3<F, U, L, A>, f: (a: A) => Type3<F, U, L, B>) => Type3<F, U, L, A>
  readonly chain$: <U, L, A, B>(f: (a: A) => Type3<F, U, L, B>) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, B>
  readonly chainFirst$: <U, L, A, B>(f: (a: A) => Type3<F, U, L, B>) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly flatten: <U, L, A>(mma: Type3<F, U, L, Type3<F, U, L, A>>) => Type3<F, U, L, A>
}

export interface AugmentedExtend<F> extends AugmentedFunctor<F>, Extend<F> {
  readonly extend$: <A, B>(f: (fa: HKT<F, A>) => B) => (ma: HKT<F, A>) => HKT<F, B>
  readonly duplicate: <A>(ma: HKT<F, A>) => HKT<F, HKT<F, A>>
}

export interface AugmentedExtend1<F extends URIS> extends AugmentedFunctor1<F>, Extend1<F> {
  readonly extend$: <A, B>(f: (fa: Type<F, A>) => B) => (ma: Type<F, A>) => Type<F, B>
  readonly duplicate: <A>(ma: Type<F, A>) => Type<F, Type<F, A>>
}

export interface AugmentedExtend2<F extends URIS2> extends AugmentedFunctor2<F>, Extend2<F> {
  readonly extend$: <L, A, B>(f: (fa: Type2<F, L, A>) => B) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly duplicate: <L, A>(ma: Type2<F, L, A>) => Type2<F, L, Type2<F, L, A>>
}

export interface AugmentedExtend2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Extend2C<F, L> {
  readonly extend$: <A, B>(f: (fa: Type2<F, L, A>) => B) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly duplicate: <A>(ma: Type2<F, L, A>) => Type2<F, L, Type2<F, L, A>>
}

export interface AugmentedExtend3<F extends URIS3> extends AugmentedFunctor3<F>, Extend3<F> {
  readonly extend$: <U, L, A, B>(f: (fa: Type3<F, U, L, A>) => B) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, B>
  readonly duplicate: <U, L, A>(ma: Type3<F, U, L, A>) => Type3<F, U, L, Type3<F, U, L, A>>
}

export interface AugmentedBifunctor<F> extends Bifunctor<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => (fa: HKT2<F, L, A>) => HKT2<F, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => (fa: HKT2<F, L, A>) => HKT2<F, M, A>
}

export interface AugmentedBifunctor2<F extends URIS2> extends Bifunctor2<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => (fa: Type2<F, L, A>) => Type2<F, M, A>
}

export interface AugmentedBifunctor3<F extends URIS3> extends Bifunctor3<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => <U>(fa: Type3<F, U, L, A>) => Type3<F, U, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => <U>(fa: Type3<F, U, L, A>) => Type3<F, U, M, A>
}

export interface AugmentedFoldable<F> extends Foldable<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: HKT<F, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: HKT<F, A>) => B
}

export interface AugmentedFoldable1<F extends URIS> extends Foldable1<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Type<F, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Type<F, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Type<F, A>) => B
}

export interface AugmentedFoldable2<F extends URIS2> extends Foldable2<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => <L>(fa: Type2<F, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <L>(fa: Type2<F, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => <L>(fa: Type2<F, L, A>) => B
}

export interface AugmentedFoldable2C<F extends URIS2, L> extends Foldable2C<F, L> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Type2<F, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Type2<F, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Type2<F, L, A>) => B
}

export interface AugmentedFoldable3<F extends URIS3> extends Foldable3<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <U, L>(fa: Type3<F, U, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
}

export interface AugmentedFoldableWithIndex<F, I> extends AugmentedFoldable<F>, FoldableWithIndex<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: HKT<F, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: HKT<F, A>) => B
}

export interface AugmentedFoldableWithIndex1<F extends URIS, I>
  extends AugmentedFoldable1<F>,
    FoldableWithIndex1<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Type<F, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Type<F, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Type<F, A>) => B
}

export interface AugmentedFoldableWithIndex2<F extends URIS2, I>
  extends AugmentedFoldable2<F>,
    FoldableWithIndex2<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <L>(fa: Type2<F, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <L>(fa: Type2<F, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <L>(fa: Type2<F, L, A>) => B
}

export interface AugmentedFoldableWithIndex2C<F extends URIS2, I, L>
  extends AugmentedFoldable2C<F, L>,
    FoldableWithIndex2C<F, I, L> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Type2<F, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Type2<F, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Type2<F, L, A>) => B
}

export interface AugmentedFoldableWithIndex3<F extends URIS3, I>
  extends AugmentedFoldable3<F>,
    FoldableWithIndex3<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <U, L>(fa: Type3<F, U, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
}

export interface AugmentedAlt<F> extends Alt<F> {
  readonly alt$: <A>(that: () => HKT<F, A>) => (fa: HKT<F, A>) => HKT<F, A>
}

export interface AugmentedAlt1<F extends URIS> extends Alt1<F> {
  readonly alt$: <A>(that: () => Type<F, A>) => (fa: Type<F, A>) => Type<F, A>
}

export interface AugmentedAlt2<F extends URIS2> extends Alt2<F> {
  readonly alt$: <L, A>(that: () => Type2<F, L, A>) => (fa: Type2<F, L, A>) => Type2<F, L, A>
}

export interface AugmentedAlt2C<F extends URIS2, L> extends Alt2C<F, L> {
  readonly alt$: <A>(that: () => Type2<F, L, A>) => (fa: Type2<F, L, A>) => Type2<F, L, A>
}

export interface AugmentedAlt3<F extends URIS3> extends Alt3<F> {
  readonly alt$: <U, L, A>(that: () => Type3<F, U, L, A>) => (fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
}

export interface AugmentedCompactable<F> {
  readonly compact: <A>(fa: HKT<F, Option<A>>) => HKT<F, A>
  readonly separate: <A, B>(fa: HKT<F, Either<A, B>>) => Separated<HKT<F, A>, HKT<F, B>>
}

export interface AugmentedCompactable1<F extends URIS> {
  readonly compact: <A>(fa: Type<F, Option<A>>) => Type<F, A>
  readonly separate: <A, B>(fa: Type<F, Either<A, B>>) => Separated<Type<F, A>, Type<F, B>>
}

export interface AugmentedCompactable2<F extends URIS2> {
  readonly compact: <L, A>(fa: Type2<F, L, Option<A>>) => Type2<F, L, A>
  readonly separate: <L, A, B>(fa: Type2<F, L, Either<A, B>>) => Separated<Type2<F, L, A>, Type2<F, L, B>>
}

export interface AugmentedCompactable2C<F extends URIS2, L> {
  readonly compact: <A>(fa: Type2<F, L, Option<A>>) => Type2<F, L, A>
  readonly separate: <A, B>(fa: Type2<F, L, Either<A, B>>) => Separated<Type2<F, L, A>, Type2<F, L, B>>
}

export interface AugmentedCompactable3<F extends URIS3> {
  readonly compact: <U, L, A>(fa: Type3<F, U, L, Option<A>>) => Type3<F, U, L, A>
  readonly separate: <U, L, A, B>(fa: Type3<F, U, L, Either<A, B>>) => Separated<Type3<F, U, L, A>, Type3<F, U, L, B>>
}

export interface AugmentedFilterable<F> extends AugmentedCompactable<F>, Filterable<F> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => HKT<F, B>
    <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => HKT<F, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
    <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => (fa: HKT<F, A>) => Separated<HKT<F, RL>, HKT<F, RR>>
}

export interface AugmentedFilterable1<F extends URIS> extends AugmentedCompactable1<F>, Filterable1<F> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Type<F, A>) => Type<F, B>
    <A>(predicate: Predicate<A>): (fa: Type<F, A>) => Type<F, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => (fa: Type<F, A>) => Type<F, B>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Type<F, A>) => Separated<Type<F, A>, Type<F, B>>
    <A>(predicate: Predicate<A>): (fa: Type<F, A>) => Separated<Type<F, A>, Type<F, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => (fa: Type<F, A>) => Separated<Type<F, RL>, Type<F, RR>>
}

export interface AugmentedFilterable2<F extends URIS2> extends AugmentedCompactable2<F>, Filterable2<F> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
    <A>(predicate: Predicate<A>): <L>(fa: Type2<F, L, A>) => Type2<F, L, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): <L>(fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, B>>
    <A>(predicate: Predicate<A>): <L>(fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => <L>(fa: Type2<F, L, A>) => Separated<Type2<F, L, RL>, Type2<F, L, RR>>
}

export interface AugmentedFilterable2C<F extends URIS2, L> extends AugmentedCompactable2C<F, L>, Filterable2C<F, L> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Type2<F, L, A>) => Type2<F, L, B>
    <A>(predicate: Predicate<A>): (fa: Type2<F, L, A>) => Type2<F, L, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => (fa: Type2<F, L, A>) => Type2<F, L, B>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, B>>
    <A>(predicate: Predicate<A>): (fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => (fa: Type2<F, L, A>) => Separated<Type2<F, L, RL>, Type2<F, L, RR>>
}

export interface AugmentedFilterable3<F extends URIS3> extends AugmentedCompactable3<F>, Filterable3<F> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
    <A>(predicate: Predicate<A>): <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): <U, L>(
      fa: Type3<F, U, L, A>
    ) => Separated<Type3<F, U, L, A>, Type3<F, U, L, B>>
    <A>(predicate: Predicate<A>): <U, L>(fa: Type3<F, U, L, A>) => Separated<Type3<F, U, L, A>, Type3<F, U, L, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => <U, L>(fa: Type3<F, U, L, A>) => Separated<Type3<F, U, L, RL>, Type3<F, U, L, RR>>
}

export interface AugmentedFilterableWithIndex<F, I> extends AugmentedFilterable<F>, FilterableWithIndex<F, I> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: HKT<F, A>) => HKT<F, B>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => HKT<F, A>
  }
  readonly filterMapWithIndex$: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => (fa: HKT<F, A>) => Separated<HKT<F, RL>, HKT<F, RR>>
}

export interface AugmentedFilterableWithIndex1<F extends URIS, I>
  extends AugmentedFilterable1<F>,
    FilterableWithIndex1<F, I> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Type<F, A>) => Type<F, B>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: Type<F, A>) => Type<F, A>
  }
  readonly filterMapWithIndex$: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Type<F, A>) => Type<F, B>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Type<F, A>) => Separated<Type<F, A>, Type<F, B>>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: Type<F, A>) => Separated<Type<F, A>, Type<F, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => (fa: Type<F, A>) => Separated<Type<F, RL>, Type<F, RR>>
}

export interface AugmentedFilterableWithIndex2<F extends URIS2, I>
  extends AugmentedFilterable2<F>,
    FilterableWithIndex2<F, I> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
    <A>(predicate: PredicateWithIndex<I, A>): <L>(fa: Type2<F, L, A>) => Type2<F, L, A>
  }
  readonly filterMapWithIndex$: <A, B>(f: (i: I, a: A) => Option<B>) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <L>(
      fa: Type2<F, L, A>
    ) => Separated<Type2<F, L, A>, Type2<F, L, B>>
    <A>(predicate: PredicateWithIndex<I, A>): <L>(fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => <L>(fa: Type2<F, L, A>) => Separated<Type2<F, L, RL>, Type2<F, L, RR>>
}

export interface AugmentedFilterableWithIndex2C<F extends URIS2, I, L>
  extends AugmentedFilterable2C<F, L>,
    FilterableWithIndex2C<F, I, L> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Type2<F, L, A>) => Type2<F, L, B>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: Type2<F, L, A>) => Type2<F, L, A>
  }
  readonly filterMapWithIndex$: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Type2<F, L, A>) => Type2<F, L, B>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (
      fa: Type2<F, L, A>
    ) => Separated<Type2<F, L, A>, Type2<F, L, B>>
    <A>(predicate: PredicateWithIndex<I, A>): (fa: Type2<F, L, A>) => Separated<Type2<F, L, A>, Type2<F, L, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => (fa: Type2<F, L, A>) => Separated<Type2<F, L, RL>, Type2<F, L, RR>>
}

export interface AugmentedFilterableWithIndex3<F extends URIS3, I>
  extends AugmentedFilterable3<F>,
    FilterableWithIndex3<F, I> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
    <A>(predicate: PredicateWithIndex<I, A>): <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  }
  readonly filterMapWithIndex$: <A, B>(
    f: (i: I, a: A) => Option<B>
  ) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <U, L>(
      fa: Type3<F, U, L, A>
    ) => Separated<Type3<F, U, L, A>, Type3<F, U, L, B>>
    <A>(predicate: PredicateWithIndex<I, A>): <U, L>(
      fa: Type3<F, U, L, A>
    ) => Separated<Type3<F, U, L, A>, Type3<F, U, L, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => <U, L>(fa: Type3<F, U, L, A>) => Separated<Type3<F, U, L, RL>, Type3<F, U, L, RR>>
}

export interface AugmentedProfunctor<F> extends Profunctor<F> {
  readonly map$: <L, A, B>(f: (a: A) => B) => (fa: HKT2<F, L, A>) => HKT2<F, L, B>
  readonly promap$: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => (fbc: HKT2<F, B, C>) => HKT2<F, A, D>
}

export interface AugmentedProfunctor2<F extends URIS2> extends AugmentedFunctor2<F>, Profunctor2<F> {
  readonly promap$: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => (fbc: Type2<F, B, C>) => Type2<F, A, D>
}

export interface AugmentedProfunctor2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Profunctor2C<F, L> {
  readonly promap$: <A, C, D>(f: (a: A) => L, g: (c: C) => D) => (flc: Type2<F, L, C>) => Type2<F, A, D>
}

export interface AugmentedProfunctor3<F extends URIS3> extends AugmentedFunctor3<F>, Profunctor3<F> {
  readonly promap$: <U, A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => (fbc: Type3<F, U, B, C>) => Type3<F, U, A, D>
}

export interface AugmentedSemigroupoid<F> extends Semigroupoid<F> {
  readonly compose$: <L, A>(la: HKT2<F, L, A>) => <B>(ab: HKT2<F, A, B>) => HKT2<F, L, B>
}

export interface AugmentedSemigroupoid2<F extends URIS2> extends Semigroupoid2<F> {
  readonly compose$: <L, A>(la: Type2<F, L, A>) => <B>(ab: Type2<F, A, B>) => Type2<F, L, B>
}

export interface AugmentedSemigroupoid2C<F extends URIS2, L> extends Semigroupoid2C<F, L> {
  readonly compose$: <A>(la: Type2<F, L, A>) => <B>(ab: Type2<F, A, B>) => Type2<F, L, B>
}

export interface AugmentedSemigroupoid3<F extends URIS3> extends Semigroupoid3<F> {
  readonly compose$: <U, L, A>(la: Type3<F, U, L, A>) => <B>(ab: Type3<F, U, A, B>) => Type3<F, U, L, B>
}

const isFunctor = <F>(I: any): I is Functor<F> => typeof I.map === 'function'
const isFunctorWithIndex = <F>(I: any): I is FunctorWithIndex<F, unknown> => typeof I.mapWithIndex === 'function'
const isApply = <F>(I: any): I is Apply<F> => typeof I.ap === 'function'
const isChain = <F>(I: any): I is Chain<F> => typeof I.chain === 'function'
const isBifunctor = <F>(I: any): I is Bifunctor<F> => typeof I.bimap === 'function'
const isExtend = <F>(I: any): I is Extend<F> => typeof I.extend === 'function'
const isFoldable = <F>(I: any): I is Foldable<F> => typeof I.reduce === 'function'
const isFoldableWithIndex = <F>(I: any): I is FoldableWithIndex<F, unknown> => typeof I.reduceWithIndex === 'function'
const isAlt = <F>(I: any): I is Alt<F> => typeof I.alt === 'function'
const isFilterable = <F>(I: any): I is Filterable<F> => typeof I.filter === 'function'
const isFilterableWithIndex = <F>(I: any): I is FilterableWithIndex<F, unknown> =>
  typeof I.filterWithIndex === 'function'
const isProfunctor = <F>(I: any): I is Profunctor<F> => typeof I.promap === 'function'
const isSemigroupoid = <F>(I: any): I is Semigroupoid<F> => typeof I.compose === 'function'

/**
 * @since 2.0.0
 */
export function augment<F extends URIS3, I>(
  I: { URI: F } & I
): I &
  (I extends Chain3<F>
    ? AugmentedChain3<F>
    : I extends Apply3<F>
    ? AugmentedApply3<F>
    : I extends Functor3<F>
    ? AugmentedFunctor3<F>
    : {}) &
  (I extends FunctorWithIndex3<F, infer Ix> ? AugmentedFunctorWithIndex3<F, Ix> : {}) &
  (I extends Bifunctor3<F> ? AugmentedBifunctor3<F> : {}) &
  (I extends Extend3<F> ? AugmentedExtend3<F> : {}) &
  (I extends FoldableWithIndex3<F, infer Ix>
    ? AugmentedFoldableWithIndex3<F, Ix>
    : I extends Foldable3<F>
    ? AugmentedFoldable3<F>
    : {}) &
  (I extends Alt3<F> ? AugmentedAlt3<F> : {}) &
  (I extends FilterableWithIndex3<F, infer Ix>
    ? AugmentedFilterableWithIndex3<F, Ix>
    : I extends Filterable3<F>
    ? AugmentedFilterable3<F>
    : {}) &
  (I extends Profunctor3<F> ? AugmentedProfunctor3<F> : {}) &
  (I extends Semigroupoid3<F> ? AugmentedSemigroupoid3<F> : {})
export function augment<F extends URIS2, I, L>(
  I: { URI: F; _L: L } & I
): I &
  (I extends Chain2C<F, L>
    ? AugmentedChain2C<F, L>
    : I extends Apply2C<F, L>
    ? AugmentedApply2C<F, L>
    : I extends Functor2C<F, L>
    ? AugmentedFunctor2C<F, L>
    : {}) &
  (I extends FunctorWithIndex2C<F, infer Ix, L> ? AugmentedFunctorWithIndex2C<F, Ix, L> : {}) &
  (I extends Extend2C<F, L> ? AugmentedExtend2C<F, L> : {}) &
  (I extends FoldableWithIndex2C<F, infer Ix, L>
    ? AugmentedFoldableWithIndex2C<F, Ix, L>
    : I extends Foldable2C<F, L>
    ? AugmentedFoldable2C<F, L>
    : {}) &
  (I extends Alt2C<F, L> ? AugmentedAlt2C<F, L> : {}) &
  (I extends FilterableWithIndex2C<F, infer Ix, L>
    ? AugmentedFilterableWithIndex2C<F, Ix, L>
    : I extends Filterable2C<F, L>
    ? AugmentedFilterable2C<F, L>
    : {}) &
  (I extends Profunctor2C<F, L> ? AugmentedProfunctor2C<F, L> : {}) &
  (I extends Semigroupoid2C<F, L> ? AugmentedSemigroupoid2C<F, L> : {})
export function augment<F extends URIS2, I>(
  I: { URI: F } & I
): I &
  (I extends Chain2<F>
    ? AugmentedChain2<F>
    : I extends Apply2<F>
    ? AugmentedApply2<F>
    : I extends Functor2<F>
    ? AugmentedFunctor2<F>
    : {}) &
  (I extends FunctorWithIndex2<F, infer Ix> ? AugmentedFunctorWithIndex2<F, Ix> : {}) &
  (I extends Bifunctor2<F> ? AugmentedBifunctor2<F> : {}) &
  (I extends Extend2<F> ? AugmentedExtend2<F> : {}) &
  (I extends FoldableWithIndex2<F, infer Ix>
    ? AugmentedFoldableWithIndex2<F, Ix>
    : I extends Foldable2<F>
    ? AugmentedFoldable2<F>
    : {}) &
  (I extends Alt2<F> ? AugmentedAlt2<F> : {}) &
  (I extends FilterableWithIndex2<F, infer Ix>
    ? AugmentedFilterableWithIndex2<F, Ix>
    : I extends Filterable2<F>
    ? AugmentedFilterable2<F>
    : {}) &
  (I extends Profunctor2<F> ? AugmentedProfunctor2<F> : {}) &
  (I extends Semigroupoid2<F> ? AugmentedSemigroupoid2<F> : {})
export function augment<F extends URIS, I>(
  I: { URI: F } & I
): I &
  (I extends Chain1<F>
    ? AugmentedChain1<F>
    : I extends Apply1<F>
    ? AugmentedApply1<F>
    : I extends Functor1<F>
    ? AugmentedFunctor1<F>
    : {}) &
  (I extends FunctorWithIndex1<F, infer Ix> ? AugmentedFunctorWithIndex1<F, Ix> : {}) &
  (I extends Extend1<F> ? AugmentedExtend1<F> : {}) &
  (I extends FoldableWithIndex1<F, infer Ix>
    ? AugmentedFoldableWithIndex1<F, Ix>
    : I extends Foldable1<F>
    ? AugmentedFoldable1<F>
    : {}) &
  (I extends Alt1<F> ? AugmentedAlt1<F> : {}) &
  (I extends FilterableWithIndex1<F, infer Ix>
    ? AugmentedFilterableWithIndex1<F, Ix>
    : I extends Filterable1<F>
    ? AugmentedFilterable1<F>
    : {})
export function augment<F, I>(
  I: { URI: F } & I
): I &
  (I extends Chain<F>
    ? AugmentedChain<F>
    : I extends Apply<F>
    ? AugmentedApply<F>
    : I extends Functor<F>
    ? AugmentedFunctor<F>
    : {}) &
  (I extends FunctorWithIndex<F, infer Ix> ? AugmentedFunctorWithIndex<F, Ix> : {}) &
  (I extends Bifunctor<F> ? AugmentedBifunctor<F> : {}) &
  (I extends Extend<F> ? AugmentedExtend<F> : {}) &
  (I extends FoldableWithIndex<F, infer Ix>
    ? AugmentedFoldableWithIndex<F, Ix>
    : I extends Foldable<F>
    ? AugmentedFoldable<F>
    : {}) &
  (I extends Alt<F> ? AugmentedAlt<F> : {}) &
  (I extends FilterableWithIndex<F, infer Ix>
    ? AugmentedFilterableWithIndex<F, Ix>
    : I extends Filterable<F>
    ? AugmentedFilterable<F>
    : {}) &
  (I extends Profunctor<F> ? AugmentedProfunctor<F> : {}) &
  (I extends Semigroupoid<F> ? AugmentedSemigroupoid<F> : {})
export function augment<F, I>(I: { URI: F } & I): any {
  const r: any = Object.assign({}, I)
  if (isFunctor<F>(I)) {
    const map$: AugmentedFunctor<F>['map$'] = f => fa => I.map(fa, f)
    r.map = I.map
    r.map$ = map$
  }
  if (isFunctorWithIndex<F>(I)) {
    const mapWithIndex$: AugmentedFunctorWithIndex<F, unknown>['mapWithIndex$'] = f => fa => I.mapWithIndex(fa, f)
    r.mapWithIndex$ = mapWithIndex$
    r.mapWithIndex = I.mapWithIndex
  }
  if (isApply<F>(I)) {
    const apFirst: AugmentedApply<F>['apFirst'] = (fa, fb) => I.ap(I.map(fa, a => () => a), fb)
    const apSecond: AugmentedApply<F>['apSecond'] = <A, B>(fa: HKT<F, A>, fb: HKT<F, B>): HKT<F, B> =>
      I.ap(I.map(fa, () => (b: B) => b), fb)
    const ap$: AugmentedApply<F>['ap$'] = fa => fab => I.ap(fab, fa)
    const apFirst$: AugmentedApply<F>['apFirst$'] = fb => fa => apFirst(fa, fb)
    const apSecond$: AugmentedApply<F>['apSecond$'] = fb => fa => apSecond(fa, fb)
    r.ap = I.ap
    r.apFirst = apFirst
    r.apSecond = apSecond
    r.ap$ = ap$
    r.apFirst$ = apFirst$
    r.apSecond$ = apSecond$
  }
  if (isChain<F>(I)) {
    const chainFirst: AugmentedChain<F>['chainFirst'] = (ma, f) => I.chain(ma, a => I.map(f(a), () => a))
    const chain$: AugmentedChain<F>['chain$'] = f => ma => I.chain(ma, f)
    const chainFirst$: AugmentedChain<F>['chainFirst$'] = f => ma => chainFirst(ma, f)
    const flatten: AugmentedChain<F>['flatten'] = mma => I.chain(mma, identity)
    r.chain = I.chain
    r.chainFirst = chainFirst
    r.chain$ = chain$
    r.chainFirst$ = chainFirst$
    r.flatten = flatten
  }
  if (isExtend<F>(I)) {
    const extend$: AugmentedExtend<F>['extend$'] = f => wa => I.extend(wa, f)
    const duplicate: AugmentedExtend<F>['duplicate'] = wa => I.extend(wa, identity)
    r.extend = I.extend
    r.extend$ = extend$
    r.duplicate = duplicate
  }
  if (isBifunctor<F>(I)) {
    const bimap$: AugmentedBifunctor<F>['bimap$'] = (f, g) => fa => I.bimap(fa, f, g)
    const mapLeft$: AugmentedBifunctor<F>['mapLeft$'] = f => fa => I.mapLeft(fa, f)
    r.bimap = I.bimap
    r.mapLeft = I.mapLeft
    r.bimap$ = bimap$
    r.mapLeft$ = mapLeft$
  }
  if (isFoldable<F>(I)) {
    const reduce$: AugmentedFoldable<F>['reduce$'] = (b, f) => fa => I.reduce(fa, b, f)
    const foldMap$: AugmentedFoldable<F>['foldMap$'] = M => {
      const foldMapM = I.foldMap(M)
      return f => fa => foldMapM(fa, f)
    }
    const reduceRight$: AugmentedFoldable<F>['reduceRight$'] = (b, f) => fa => I.reduceRight(fa, b, f)
    r.reduce = I.reduce
    r.foldMap = I.foldMap
    r.reduceRight = I.reduceRight
    r.reduce$ = reduce$
    r.foldMap$ = foldMap$
    r.reduceRight$ = reduceRight$
  }
  if (isFoldableWithIndex<F>(I)) {
    const reduceWithIndex$: AugmentedFoldableWithIndex<F, unknown>['reduceWithIndex$'] = (b, f) => fa =>
      I.reduceWithIndex(fa, b, f)
    const foldMapWithIndex$: AugmentedFoldableWithIndex<F, unknown>['foldMapWithIndex$'] = M => {
      const foldMapM = I.foldMapWithIndex(M)
      return f => fa => foldMapM(fa, f)
    }
    const reduceRightWithIndex$: AugmentedFoldableWithIndex<F, unknown>['reduceRightWithIndex$'] = (b, f) => fa =>
      I.reduceRightWithIndex(fa, b, f)
    r.reduceWithIndex = I.reduceWithIndex
    r.foldMapWithIndex = I.foldMapWithIndex
    r.reduceRightWithIndex = I.reduceRightWithIndex
    r.reduceWithIndex$ = reduceWithIndex$
    r.foldMapWithIndex$ = foldMapWithIndex$
    r.reduceRightWithIndex$ = reduceRightWithIndex$
  }
  if (isAlt<F>(I)) {
    const alt$: AugmentedAlt<F>['alt$'] = that => fa => I.alt(fa, that)
    r.alt = I.alt
    r.alt$ = alt$
  }
  if (isFilterable<F>(I)) {
    const filter$: AugmentedFilterable<F>['filter$'] = <A>(predicate: Predicate<A>) => (fa: HKT<F, A>) =>
      I.filter(fa, predicate)
    const filterMap$: AugmentedFilterable<F>['filterMap$'] = f => fa => I.filterMap(fa, f)
    const partition$: AugmentedFilterable<F>['partition$'] = <A>(predicate: Predicate<A>) => (fa: HKT<F, A>) =>
      I.partition(fa, predicate)
    const partitionMap$: AugmentedFilterable<F>['partitionMap$'] = f => fa => I.partitionMap(fa, f)
    r.filter = I.filter
    r.filterMap = I.filterMap
    r.partition = I.partition
    r.partitionMap = I.partitionMap
    r.filter$ = filter$
    r.filterMap$ = filterMap$
    r.partition$ = partition$
    r.partitionMap$ = partitionMap$
  }
  if (isFilterableWithIndex<F>(I)) {
    const filterWithIndex$: AugmentedFilterableWithIndex<F, unknown>['filterWithIndex$'] = <A>(
      predicate: PredicateWithIndex<unknown, A>
    ) => (fa: HKT<F, A>) => I.filterWithIndex(fa, predicate)
    const filterMapWithIndex$: AugmentedFilterableWithIndex<F, unknown>['filterMapWithIndex$'] = f => fa =>
      I.filterMapWithIndex(fa, f)
    const partitionWithIndex$: AugmentedFilterableWithIndex<F, unknown>['partitionWithIndex$'] = <A>(
      predicate: PredicateWithIndex<unknown, A>
    ) => (fa: HKT<F, A>) => I.partitionWithIndex(fa, predicate)
    const partitionMapWithIndex$: AugmentedFilterableWithIndex<F, unknown>['partitionMapWithIndex$'] = f => fa =>
      I.partitionMapWithIndex(fa, f)
    r.filterWithIndex = I.filterWithIndex
    r.filterMapWithIndex = I.filterMapWithIndex
    r.partitionWithIndex = I.partitionWithIndex
    r.partitionMapWithIndex = I.partitionMapWithIndex
    r.filterWithIndex$ = filterWithIndex$
    r.filterMapWithIndex$ = filterMapWithIndex$
    r.partitionWithIndex$ = partitionWithIndex$
    r.partitionMapWithIndex$ = partitionMapWithIndex$
  }
  if (isProfunctor<F>(I)) {
    const promap$: AugmentedProfunctor<F>['promap$'] = (f, g) => fa => I.promap(fa, f, g)
    r.promap = I.promap
    r.promap$ = promap$
  }
  if (isSemigroupoid<F>(I)) {
    const compose$: AugmentedSemigroupoid<F>['compose$'] = that => fa =>
      I.compose(
        fa,
        that
      )
    r.compose = I.compose
    r.compose$ = compose$
  }
  return r
}
