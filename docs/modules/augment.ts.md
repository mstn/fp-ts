---
title: augment.ts
nav_order: 6
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [AugmentedAlt (interface)](#augmentedalt-interface)
- [AugmentedAlt1 (interface)](#augmentedalt1-interface)
- [AugmentedAlt2 (interface)](#augmentedalt2-interface)
- [AugmentedAlt2C (interface)](#augmentedalt2c-interface)
- [AugmentedAlt3 (interface)](#augmentedalt3-interface)
- [AugmentedAlt4 (interface)](#augmentedalt4-interface)
- [AugmentedApply (interface)](#augmentedapply-interface)
- [AugmentedApply1 (interface)](#augmentedapply1-interface)
- [AugmentedApply2 (interface)](#augmentedapply2-interface)
- [AugmentedApply2C (interface)](#augmentedapply2c-interface)
- [AugmentedApply3 (interface)](#augmentedapply3-interface)
- [AugmentedApply4 (interface)](#augmentedapply4-interface)
- [AugmentedBifunctor (interface)](#augmentedbifunctor-interface)
- [AugmentedBifunctor2 (interface)](#augmentedbifunctor2-interface)
- [AugmentedBifunctor3 (interface)](#augmentedbifunctor3-interface)
- [AugmentedBifunctor4 (interface)](#augmentedbifunctor4-interface)
- [AugmentedChain (interface)](#augmentedchain-interface)
- [AugmentedChain1 (interface)](#augmentedchain1-interface)
- [AugmentedChain2 (interface)](#augmentedchain2-interface)
- [AugmentedChain2C (interface)](#augmentedchain2c-interface)
- [AugmentedChain3 (interface)](#augmentedchain3-interface)
- [AugmentedChain4 (interface)](#augmentedchain4-interface)
- [AugmentedExtend (interface)](#augmentedextend-interface)
- [AugmentedExtend1 (interface)](#augmentedextend1-interface)
- [AugmentedExtend2 (interface)](#augmentedextend2-interface)
- [AugmentedExtend2C (interface)](#augmentedextend2c-interface)
- [AugmentedExtend3 (interface)](#augmentedextend3-interface)
- [AugmentedExtend4 (interface)](#augmentedextend4-interface)
- [AugmentedFilterable (interface)](#augmentedfilterable-interface)
- [AugmentedFilterable1 (interface)](#augmentedfilterable1-interface)
- [AugmentedFilterable2 (interface)](#augmentedfilterable2-interface)
- [AugmentedFilterable2C (interface)](#augmentedfilterable2c-interface)
- [AugmentedFilterable3 (interface)](#augmentedfilterable3-interface)
- [AugmentedFilterable4 (interface)](#augmentedfilterable4-interface)
- [AugmentedFilterableWithIndex (interface)](#augmentedfilterablewithindex-interface)
- [AugmentedFilterableWithIndex1 (interface)](#augmentedfilterablewithindex1-interface)
- [AugmentedFilterableWithIndex2 (interface)](#augmentedfilterablewithindex2-interface)
- [AugmentedFilterableWithIndex2C (interface)](#augmentedfilterablewithindex2c-interface)
- [AugmentedFilterableWithIndex3 (interface)](#augmentedfilterablewithindex3-interface)
- [AugmentedFilterableWithIndex4 (interface)](#augmentedfilterablewithindex4-interface)
- [AugmentedFoldable (interface)](#augmentedfoldable-interface)
- [AugmentedFoldable1 (interface)](#augmentedfoldable1-interface)
- [AugmentedFoldable2 (interface)](#augmentedfoldable2-interface)
- [AugmentedFoldable2C (interface)](#augmentedfoldable2c-interface)
- [AugmentedFoldable3 (interface)](#augmentedfoldable3-interface)
- [AugmentedFoldable4 (interface)](#augmentedfoldable4-interface)
- [AugmentedFoldableWithIndex (interface)](#augmentedfoldablewithindex-interface)
- [AugmentedFoldableWithIndex1 (interface)](#augmentedfoldablewithindex1-interface)
- [AugmentedFoldableWithIndex2 (interface)](#augmentedfoldablewithindex2-interface)
- [AugmentedFoldableWithIndex2C (interface)](#augmentedfoldablewithindex2c-interface)
- [AugmentedFoldableWithIndex3 (interface)](#augmentedfoldablewithindex3-interface)
- [AugmentedFoldableWithIndex4 (interface)](#augmentedfoldablewithindex4-interface)
- [AugmentedFunctor (interface)](#augmentedfunctor-interface)
- [AugmentedFunctor1 (interface)](#augmentedfunctor1-interface)
- [AugmentedFunctor2 (interface)](#augmentedfunctor2-interface)
- [AugmentedFunctor2C (interface)](#augmentedfunctor2c-interface)
- [AugmentedFunctor3 (interface)](#augmentedfunctor3-interface)
- [AugmentedFunctor4 (interface)](#augmentedfunctor4-interface)
- [AugmentedFunctorWithIndex (interface)](#augmentedfunctorwithindex-interface)
- [AugmentedFunctorWithIndex1 (interface)](#augmentedfunctorwithindex1-interface)
- [AugmentedFunctorWithIndex2 (interface)](#augmentedfunctorwithindex2-interface)
- [AugmentedFunctorWithIndex2C (interface)](#augmentedfunctorwithindex2c-interface)
- [AugmentedFunctorWithIndex3 (interface)](#augmentedfunctorwithindex3-interface)
- [AugmentedFunctorWithIndex4 (interface)](#augmentedfunctorwithindex4-interface)
- [AugmentedProfunctor (interface)](#augmentedprofunctor-interface)
- [AugmentedProfunctor2 (interface)](#augmentedprofunctor2-interface)
- [AugmentedProfunctor2C (interface)](#augmentedprofunctor2c-interface)
- [AugmentedProfunctor3 (interface)](#augmentedprofunctor3-interface)
- [AugmentedProfunctor4 (interface)](#augmentedprofunctor4-interface)
- [AugmentedSemigroupoid (interface)](#augmentedsemigroupoid-interface)
- [AugmentedSemigroupoid2 (interface)](#augmentedsemigroupoid2-interface)
- [AugmentedSemigroupoid2C (interface)](#augmentedsemigroupoid2c-interface)
- [AugmentedSemigroupoid3 (interface)](#augmentedsemigroupoid3-interface)
- [AugmentedSemigroupoid4 (interface)](#augmentedsemigroupoid4-interface)
- [augment (function)](#augment-function)

---

# AugmentedAlt (interface)

**Signature**

```ts
export interface AugmentedAlt<F> extends Alt<F> {
  readonly alt$: <A>(that: () => HKT<F, A>) => (fa: HKT<F, A>) => HKT<F, A>
}
```

# AugmentedAlt1 (interface)

**Signature**

```ts
export interface AugmentedAlt1<F extends URIS> extends Alt1<F> {
  readonly alt$: <A>(that: () => Type<F, A>) => (fa: Type<F, A>) => Type<F, A>
}
```

# AugmentedAlt2 (interface)

**Signature**

```ts
export interface AugmentedAlt2<F extends URIS2> extends Alt2<F> {
  readonly alt$: <L, A>(that: () => Type2<F, L, A>) => (fa: Type2<F, L, A>) => Type2<F, L, A>
}
```

# AugmentedAlt2C (interface)

**Signature**

```ts
export interface AugmentedAlt2C<F extends URIS2, L> extends Alt2C<F, L> {
  readonly alt$: <A>(that: () => Type2<F, L, A>) => (fa: Type2<F, L, A>) => Type2<F, L, A>
}
```

# AugmentedAlt3 (interface)

**Signature**

```ts
export interface AugmentedAlt3<F extends URIS3> extends Alt3<F> {
  readonly alt$: <U, L, A>(that: () => Type3<F, U, L, A>) => (fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
}
```

# AugmentedAlt4 (interface)

**Signature**

```ts
export interface AugmentedAlt4<F extends URIS4> extends Alt4<F> {
  readonly alt$: <X, U, L, A>(that: () => Type4<F, X, U, L, A>) => (fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
}
```

# AugmentedApply (interface)

**Signature**

```ts
export interface AugmentedApply<F> extends AugmentedFunctor<F>, Apply<F> {
  readonly apFirst: <A, B>(fa: HKT<F, A>, fb: HKT<F, B>) => HKT<F, A>
  readonly apSecond: <A, B>(fa: HKT<F, A>, fb: HKT<F, B>) => HKT<F, B>
  readonly ap$: <A>(fa: HKT<F, A>) => <B>(fab: HKT<F, (a: A) => B>) => HKT<F, B>
  readonly apFirst$: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly apSecond$: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, B>
}
```

# AugmentedApply1 (interface)

**Signature**

```ts
export interface AugmentedApply1<F extends URIS> extends AugmentedFunctor1<F>, Apply1<F> {
  readonly apFirst: <A, B>(fa: Type<F, A>, fb: Type<F, B>) => Type<F, A>
  readonly apSecond: <A, B>(fa: Type<F, A>, fb: Type<F, B>) => Type<F, B>
  readonly ap$: <A>(fa: Type<F, A>) => <B>(fab: Type<F, (a: A) => B>) => Type<F, B>
  readonly apFirst$: <B>(fb: Type<F, B>) => <A>(fa: Type<F, A>) => Type<F, A>
  readonly apSecond$: <B>(fb: Type<F, B>) => <A>(fa: Type<F, A>) => Type<F, B>
}
```

# AugmentedApply2 (interface)

**Signature**

```ts
export interface AugmentedApply2<F extends URIS2> extends AugmentedFunctor2<F>, Apply2<F> {
  readonly apFirst: <L, A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond: <L, A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, B>
  readonly ap$: <L, A>(fa: Type2<F, L, A>) => <B>(fab: Type2<F, L, (a: A) => B>) => Type2<F, L, B>
  readonly apFirst$: <L, B>(fb: Type2<F, L, B>) => <A>(fa: Type2<F, L, A>) => Type2<F, L, A>
  readonly apSecond$: <L, B>(fb: Type2<F, L, B>) => <A>(fa: Type2<F, L, A>) => Type2<F, L, B>
}
```

# AugmentedApply2C (interface)

**Signature**

```ts
export interface AugmentedApply2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Apply2C<F, L> {
  readonly apFirst: <A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond: <A, B>(fa: Type2<F, L, A>, fb: Type2<F, L, B>) => Type2<F, L, B>
  readonly ap$: <A>(fa: Type2<F, L, A>) => <B>(fab: Type2<F, L, (a: A) => B>) => Type2<F, L, B>
  readonly apFirst$: <A>(fb: Type2<F, L, A>) => <B>(fb: Type2<F, L, B>) => Type2<F, L, A>
  readonly apSecond$: <A>(fb: Type2<F, L, A>) => <B>(fb: Type2<F, L, B>) => Type2<F, L, B>
}
```

# AugmentedApply3 (interface)

**Signature**

```ts
export interface AugmentedApply3<F extends URIS3> extends AugmentedFunctor3<F>, Apply3<F> {
  readonly apFirst: <U, L, A, B>(fab: Type3<F, U, L, (a: A) => B>, fb: Type3<F, U, L, B>) => Type3<F, U, L, A>
  readonly apSecond: <U, L, A, B>(fab: Type3<F, U, L, (a: A) => B>, fb: Type3<F, U, L, B>) => Type3<F, U, L, B>
  readonly ap$: <U, L, A>(fa: Type3<F, U, L, A>) => <B>(fab: Type3<F, U, L, (a: A) => B>) => Type3<F, U, L, B>
  readonly apFirst$: <U, L, B>(fb: Type3<F, U, L, B>) => <A>(fa: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly apSecond$: <U, L, B>(fb: Type3<F, U, L, B>) => <A>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}
```

# AugmentedApply4 (interface)

**Signature**

```ts
export interface AugmentedApply4<F extends URIS4> extends AugmentedFunctor4<F>, Apply4<F> {
  readonly apFirst: <X, U, L, A, B>(
    fab: Type4<F, X, U, L, (a: A) => B>,
    fb: Type4<F, X, U, L, B>
  ) => Type4<F, X, U, L, A>
  readonly apSecond: <X, U, L, A, B>(
    fab: Type4<F, X, U, L, (a: A) => B>,
    fb: Type4<F, X, U, L, B>
  ) => Type4<F, X, U, L, B>
  readonly ap$: <X, U, L, A>(
    fa: Type4<F, X, U, L, A>
  ) => <B>(fab: Type4<F, X, U, L, (a: A) => B>) => Type4<F, X, U, L, B>
  readonly apFirst$: <X, U, L, B>(fb: Type4<F, X, U, L, B>) => <A>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  readonly apSecond$: <X, U, L, B>(fb: Type4<F, X, U, L, B>) => <A>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
}
```

# AugmentedBifunctor (interface)

**Signature**

```ts
export interface AugmentedBifunctor<F> extends Bifunctor<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => (fa: HKT2<F, L, A>) => HKT2<F, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => (fa: HKT2<F, L, A>) => HKT2<F, M, A>
}
```

# AugmentedBifunctor2 (interface)

**Signature**

```ts
export interface AugmentedBifunctor2<F extends URIS2> extends Bifunctor2<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => (fa: Type2<F, L, A>) => Type2<F, M, A>
}
```

# AugmentedBifunctor3 (interface)

**Signature**

```ts
export interface AugmentedBifunctor3<F extends URIS3> extends Bifunctor3<F> {
  readonly bimap$: <L, A, M, B>(f: (l: L) => M, g: (a: A) => B) => <U>(fa: Type3<F, U, L, A>) => Type3<F, U, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => <U>(fa: Type3<F, U, L, A>) => Type3<F, U, M, A>
}
```

# AugmentedBifunctor4 (interface)

**Signature**

```ts
export interface AugmentedBifunctor4<F extends URIS4> extends Bifunctor4<F> {
  readonly bimap$: <L, A, M, B>(
    f: (l: L) => M,
    g: (a: A) => B
  ) => <X, U>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, M, B>
  readonly mapLeft$: <L, A, M>(f: (l: L) => M) => <X, U>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, M, A>
}
```

# AugmentedChain (interface)

**Signature**

```ts
export interface AugmentedChain<F> extends AugmentedApply<F>, Chain<F> {
  readonly chainFirst: <A, B>(ma: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, A>
  readonly chain$: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, B>
  readonly chainFirst$: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, A>
  readonly flatten: <A>(mma: HKT<F, HKT<F, A>>) => HKT<F, A>
}
```

# AugmentedChain1 (interface)

**Signature**

```ts
export interface AugmentedChain1<F extends URIS> extends AugmentedApply1<F>, Chain1<F> {
  readonly chainFirst: <A, B>(ma: Type<F, A>, f: (a: A) => Type<F, B>) => Type<F, A>
  readonly chain$: <A, B>(f: (a: A) => Type<F, B>) => (ma: Type<F, A>) => Type<F, B>
  readonly chainFirst$: <A, B>(f: (a: A) => Type<F, B>) => (ma: Type<F, A>) => Type<F, A>
  readonly flatten: <A>(mma: Type<F, Type<F, A>>) => Type<F, A>
}
```

# AugmentedChain2 (interface)

**Signature**

```ts
export interface AugmentedChain2<F extends URIS2> extends AugmentedApply2<F>, Chain2<F> {
  readonly chainFirst: <L, A, B>(ma: Type2<F, L, A>, f: (a: A) => Type2<F, L, B>) => Type2<F, L, A>
  readonly chain$: <L, A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly chainFirst$: <L, A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, A>
  readonly flatten: <L, A>(mma: Type2<F, L, Type2<F, L, A>>) => Type2<F, L, A>
}
```

# AugmentedChain2C (interface)

**Signature**

```ts
export interface AugmentedChain2C<F extends URIS2, L> extends AugmentedApply2C<F, L>, Chain2C<F, L> {
  readonly chainFirst: <A, B>(ma: Type2<F, L, A>, f: (a: A) => Type2<F, L, B>) => Type2<F, L, A>
  readonly chain$: <A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly chainFirst$: <A, B>(f: (a: A) => Type2<F, L, B>) => (ma: Type2<F, L, A>) => Type2<F, L, A>
  readonly flatten: <A>(mma: Type2<F, L, Type2<F, L, A>>) => Type2<F, L, A>
}
```

# AugmentedChain3 (interface)

**Signature**

```ts
export interface AugmentedChain3<F extends URIS3> extends AugmentedApply3<F>, Chain3<F> {
  readonly chainFirst: <U, L, A, B>(ma: Type3<F, U, L, A>, f: (a: A) => Type3<F, U, L, B>) => Type3<F, U, L, A>
  readonly chain$: <U, L, A, B>(f: (a: A) => Type3<F, U, L, B>) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, B>
  readonly chainFirst$: <U, L, A, B>(f: (a: A) => Type3<F, U, L, B>) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, A>
  readonly flatten: <U, L, A>(mma: Type3<F, U, L, Type3<F, U, L, A>>) => Type3<F, U, L, A>
}
```

# AugmentedChain4 (interface)

**Signature**

```ts
export interface AugmentedChain4<F extends URIS4> extends AugmentedApply4<F>, Chain4<F> {
  readonly chainFirst: <X, U, L, A, B>(
    ma: Type4<F, X, U, L, A>,
    f: (a: A) => Type4<F, X, U, L, B>
  ) => Type4<F, X, U, L, A>
  readonly chain$: <X, U, L, A, B>(
    f: (a: A) => Type4<F, X, U, L, B>
  ) => (ma: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
  readonly chainFirst$: <X, U, L, A, B>(
    f: (a: A) => Type4<F, X, U, L, B>
  ) => (ma: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  readonly flatten: <X, U, L, A>(mma: Type4<F, X, U, L, Type4<F, X, U, L, A>>) => Type4<F, X, U, L, A>
}
```

# AugmentedExtend (interface)

**Signature**

```ts
export interface AugmentedExtend<F> extends AugmentedFunctor<F>, Extend<F> {
  readonly extend$: <A, B>(f: (fa: HKT<F, A>) => B) => (ma: HKT<F, A>) => HKT<F, B>
  readonly duplicate: <A>(ma: HKT<F, A>) => HKT<F, HKT<F, A>>
}
```

# AugmentedExtend1 (interface)

**Signature**

```ts
export interface AugmentedExtend1<F extends URIS> extends AugmentedFunctor1<F>, Extend1<F> {
  readonly extend$: <A, B>(f: (fa: Type<F, A>) => B) => (ma: Type<F, A>) => Type<F, B>
  readonly duplicate: <A>(ma: Type<F, A>) => Type<F, Type<F, A>>
}
```

# AugmentedExtend2 (interface)

**Signature**

```ts
export interface AugmentedExtend2<F extends URIS2> extends AugmentedFunctor2<F>, Extend2<F> {
  readonly extend$: <L, A, B>(f: (fa: Type2<F, L, A>) => B) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly duplicate: <L, A>(ma: Type2<F, L, A>) => Type2<F, L, Type2<F, L, A>>
}
```

# AugmentedExtend2C (interface)

**Signature**

```ts
export interface AugmentedExtend2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Extend2C<F, L> {
  readonly extend$: <A, B>(f: (fa: Type2<F, L, A>) => B) => (ma: Type2<F, L, A>) => Type2<F, L, B>
  readonly duplicate: <A>(ma: Type2<F, L, A>) => Type2<F, L, Type2<F, L, A>>
}
```

# AugmentedExtend3 (interface)

**Signature**

```ts
export interface AugmentedExtend3<F extends URIS3> extends AugmentedFunctor3<F>, Extend3<F> {
  readonly extend$: <U, L, A, B>(f: (fa: Type3<F, U, L, A>) => B) => (ma: Type3<F, U, L, A>) => Type3<F, U, L, B>
  readonly duplicate: <U, L, A>(ma: Type3<F, U, L, A>) => Type3<F, U, L, Type3<F, U, L, A>>
}
```

# AugmentedExtend4 (interface)

**Signature**

```ts
export interface AugmentedExtend4<F extends URIS4> extends AugmentedFunctor4<F>, Extend4<F> {
  readonly extend$: <X, U, L, A, B>(
    f: (fa: Type4<F, X, U, L, A>) => B
  ) => (ma: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
  readonly duplicate: <X, U, L, A>(ma: Type4<F, X, U, L, A>) => Type4<F, X, U, L, Type4<F, X, U, L, A>>
}
```

# AugmentedFilterable (interface)

**Signature**

```ts
export interface AugmentedFilterable<F> extends Filterable<F> {
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
```

# AugmentedFilterable1 (interface)

**Signature**

```ts
export interface AugmentedFilterable1<F extends URIS> extends Filterable1<F> {
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
```

# AugmentedFilterable2 (interface)

**Signature**

```ts
export interface AugmentedFilterable2<F extends URIS2> extends Filterable2<F> {
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
```

# AugmentedFilterable2C (interface)

**Signature**

```ts
export interface AugmentedFilterable2C<F extends URIS2, L> extends Filterable2C<F, L> {
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
```

# AugmentedFilterable3 (interface)

**Signature**

```ts
export interface AugmentedFilterable3<F extends URIS3> extends Filterable3<F> {
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
```

# AugmentedFilterable4 (interface)

**Signature**

```ts
export interface AugmentedFilterable4<F extends URIS4> extends Filterable4<F> {
  readonly filter$: {
    <A, B extends A>(refinement: Refinement<A, B>): <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
    <A>(predicate: Predicate<A>): <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  }
  readonly filterMap$: <A, B>(f: (a: A) => Option<B>) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  readonly partition$: {
    <A, B extends A>(refinement: Refinement<A, B>): <X, U, L>(
      fa: Type4<F, X, U, L, A>
    ) => Separated<Type4<F, X, U, L, A>, Type4<F, X, U, L, B>>
    <A>(predicate: Predicate<A>): <X, U, L>(
      fa: Type4<F, X, U, L, A>
    ) => Separated<Type4<F, X, U, L, A>, Type4<F, X, U, L, A>>
  }
  readonly partitionMap$: <A, RL, RR>(
    f: (a: A) => Either<RL, RR>
  ) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Separated<Type4<F, X, U, L, RL>, Type4<F, X, U, L, RR>>
}
```

# AugmentedFilterableWithIndex (interface)

**Signature**

```ts
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
```

# AugmentedFilterableWithIndex1 (interface)

**Signature**

```ts
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
```

# AugmentedFilterableWithIndex2 (interface)

**Signature**

```ts
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
```

# AugmentedFilterableWithIndex2C (interface)

**Signature**

```ts
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
```

# AugmentedFilterableWithIndex3 (interface)

**Signature**

```ts
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
```

# AugmentedFilterableWithIndex4 (interface)

**Signature**

```ts
export interface AugmentedFilterableWithIndex4<F extends URIS4, I>
  extends AugmentedFilterable4<F>,
    FilterableWithIndex4<F, I> {
  readonly filterWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <X, U, L>(
      fa: Type4<F, X, U, L, A>
    ) => Type4<F, X, U, L, B>
    <A>(predicate: PredicateWithIndex<I, A>): <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  }
  readonly filterMapWithIndex$: <A, B>(
    f: (i: I, a: A) => Option<B>
  ) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, A>
  readonly partitionWithIndex$: {
    <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <X, U, L>(
      fa: Type4<F, X, U, L, A>
    ) => Separated<Type4<F, X, U, L, A>, Type4<F, X, U, L, B>>
    <A>(predicate: PredicateWithIndex<I, A>): <X, U, L>(
      fa: Type4<F, X, U, L, A>
    ) => Separated<Type4<F, X, U, L, A>, Type4<F, X, U, L, A>>
  }
  readonly partitionMapWithIndex$: <A, RL, RR>(
    f: (i: I, a: A) => Either<RL, RR>
  ) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Separated<Type4<F, X, U, L, RL>, Type4<F, X, U, L, RR>>
}
```

# AugmentedFoldable (interface)

**Signature**

```ts
export interface AugmentedFoldable<F> extends Foldable<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: HKT<F, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: HKT<F, A>) => B
}
```

# AugmentedFoldable1 (interface)

**Signature**

```ts
export interface AugmentedFoldable1<F extends URIS> extends Foldable1<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Type<F, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Type<F, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Type<F, A>) => B
}
```

# AugmentedFoldable2 (interface)

**Signature**

```ts
export interface AugmentedFoldable2<F extends URIS2> extends Foldable2<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => <L>(fa: Type2<F, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <L>(fa: Type2<F, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => <L>(fa: Type2<F, L, A>) => B
}
```

# AugmentedFoldable2C (interface)

**Signature**

```ts
export interface AugmentedFoldable2C<F extends URIS2, L> extends Foldable2C<F, L> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Type2<F, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Type2<F, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Type2<F, L, A>) => B
}
```

# AugmentedFoldable3 (interface)

**Signature**

```ts
export interface AugmentedFoldable3<F extends URIS3> extends Foldable3<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <U, L>(fa: Type3<F, U, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
}
```

# AugmentedFoldable4 (interface)

**Signature**

```ts
export interface AugmentedFoldable4<F extends URIS4> extends Foldable4<F> {
  readonly reduce$: <A, B>(b: B, f: (b: B, a: A) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => B
  readonly foldMap$: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <X, U, L>(fa: Type4<F, X, U, L, A>) => M
  readonly reduceRight$: <A, B>(b: B, f: (a: A, b: B) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => B
}
```

# AugmentedFoldableWithIndex (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex<F, I> extends AugmentedFoldable<F>, FoldableWithIndex<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: HKT<F, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: HKT<F, A>) => B
}
```

# AugmentedFoldableWithIndex1 (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex1<F extends URIS, I>
  extends AugmentedFoldable1<F>,
    FoldableWithIndex1<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Type<F, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Type<F, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Type<F, A>) => B
}
```

# AugmentedFoldableWithIndex2 (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex2<F extends URIS2, I>
  extends AugmentedFoldable2<F>,
    FoldableWithIndex2<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <L>(fa: Type2<F, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <L>(fa: Type2<F, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <L>(fa: Type2<F, L, A>) => B
}
```

# AugmentedFoldableWithIndex2C (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex2C<F extends URIS2, I, L>
  extends AugmentedFoldable2C<F, L>,
    FoldableWithIndex2C<F, I, L> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Type2<F, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Type2<F, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Type2<F, L, A>) => B
}
```

# AugmentedFoldableWithIndex3 (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex3<F extends URIS3, I>
  extends AugmentedFoldable3<F>,
    FoldableWithIndex3<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <U, L>(fa: Type3<F, U, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <U, L>(fa: Type3<F, U, L, A>) => B
}
```

# AugmentedFoldableWithIndex4 (interface)

**Signature**

```ts
export interface AugmentedFoldableWithIndex4<F extends URIS4, I>
  extends AugmentedFoldable4<F>,
    FoldableWithIndex4<F, I> {
  readonly reduceWithIndex$: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => B
  readonly foldMapWithIndex$: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <X, U, L>(fa: Type4<F, X, U, L, A>) => M
  readonly reduceRightWithIndex$: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => B
}
```

# AugmentedFunctor (interface)

**Signature**

```ts
export interface AugmentedFunctor<F> extends Functor<F> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}
```

# AugmentedFunctor1 (interface)

**Signature**

```ts
export interface AugmentedFunctor1<F extends URIS> extends Functor1<F> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: Type<F, A>) => Type<F, B>
}
```

# AugmentedFunctor2 (interface)

**Signature**

```ts
export interface AugmentedFunctor2<F extends URIS2> extends Functor2<F> {
  readonly map$: <A, B>(f: (a: A) => B) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
}
```

# AugmentedFunctor2C (interface)

**Signature**

```ts
export interface AugmentedFunctor2C<F extends URIS2, L> extends Functor2C<F, L> {
  readonly map$: <A, B>(f: (a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, L, B>
}
```

# AugmentedFunctor3 (interface)

**Signature**

```ts
export interface AugmentedFunctor3<F extends URIS3> extends Functor3<F> {
  readonly map$: <A, B>(f: (a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}
```

# AugmentedFunctor4 (interface)

**Signature**

```ts
export interface AugmentedFunctor4<F extends URIS4> extends Functor4<F> {
  readonly map$: <A, B>(f: (a: A) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
}
```

# AugmentedFunctorWithIndex (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex<F, I> extends AugmentedFunctor<F>, FunctorWithIndex<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}
```

# AugmentedFunctorWithIndex1 (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex1<F extends URIS, I> extends AugmentedFunctor1<F>, FunctorWithIndex1<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: Type<F, A>) => Type<F, B>
}
```

# AugmentedFunctorWithIndex2 (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex2<F extends URIS2, I> extends AugmentedFunctor2<F>, FunctorWithIndex2<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => <L>(fa: Type2<F, L, A>) => Type2<F, L, B>
}
```

# AugmentedFunctorWithIndex2C (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex2C<F extends URIS2, I, L>
  extends AugmentedFunctor2C<F, L>,
    FunctorWithIndex2C<F, I, L> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => (fa: Type2<F, L, A>) => Type2<F, L, B>
}
```

# AugmentedFunctorWithIndex3 (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex3<F extends URIS3, I> extends AugmentedFunctor3<F>, FunctorWithIndex3<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => <U, L>(fa: Type3<F, U, L, A>) => Type3<F, U, L, B>
}
```

# AugmentedFunctorWithIndex4 (interface)

**Signature**

```ts
export interface AugmentedFunctorWithIndex4<F extends URIS4, I> extends AugmentedFunctor4<F>, FunctorWithIndex4<F, I> {
  readonly mapWithIndex$: <A, B>(f: (i: I, a: A) => B) => <X, U, L>(fa: Type4<F, X, U, L, A>) => Type4<F, X, U, L, B>
}
```

# AugmentedProfunctor (interface)

**Signature**

```ts
export interface AugmentedProfunctor<F> extends Profunctor<F> {
  readonly map$: <L, A, B>(f: (a: A) => B) => (fa: HKT2<F, L, A>) => HKT2<F, L, B>
  readonly promap$: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => (fbc: HKT2<F, B, C>) => HKT2<F, A, D>
}
```

# AugmentedProfunctor2 (interface)

**Signature**

```ts
export interface AugmentedProfunctor2<F extends URIS2> extends AugmentedFunctor2<F>, Profunctor2<F> {
  readonly promap$: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => (fbc: Type2<F, B, C>) => Type2<F, A, D>
}
```

# AugmentedProfunctor2C (interface)

**Signature**

```ts
export interface AugmentedProfunctor2C<F extends URIS2, L> extends AugmentedFunctor2C<F, L>, Profunctor2C<F, L> {
  readonly promap$: <A, C, D>(f: (a: A) => L, g: (c: C) => D) => (flc: Type2<F, L, C>) => Type2<F, A, D>
}
```

# AugmentedProfunctor3 (interface)

**Signature**

```ts
export interface AugmentedProfunctor3<F extends URIS3> extends AugmentedFunctor3<F>, Profunctor3<F> {
  readonly promap$: <A, B, C, D>(f: (a: A) => B, g: (c: C) => D) => <U>(fbc: Type3<F, U, B, C>) => Type3<F, U, A, D>
}
```

# AugmentedProfunctor4 (interface)

**Signature**

```ts
export interface AugmentedProfunctor4<F extends URIS4> extends AugmentedFunctor4<F>, Profunctor4<F> {
  readonly promap$: <A, B, C, D>(
    f: (a: A) => B,
    g: (c: C) => D
  ) => <X, U>(fbc: Type4<F, X, U, B, C>) => Type4<F, X, U, A, D>
}
```

# AugmentedSemigroupoid (interface)

**Signature**

```ts
export interface AugmentedSemigroupoid<F> extends Semigroupoid<F> {
  readonly compose$: <L, A>(la: HKT2<F, L, A>) => <B>(ab: HKT2<F, A, B>) => HKT2<F, L, B>
}
```

# AugmentedSemigroupoid2 (interface)

**Signature**

```ts
export interface AugmentedSemigroupoid2<F extends URIS2> extends Semigroupoid2<F> {
  readonly compose$: <L, A>(la: Type2<F, L, A>) => <B>(ab: Type2<F, A, B>) => Type2<F, L, B>
}
```

# AugmentedSemigroupoid2C (interface)

**Signature**

```ts
export interface AugmentedSemigroupoid2C<F extends URIS2, L> extends Semigroupoid2C<F, L> {
  readonly compose$: <A>(la: Type2<F, L, A>) => <B>(ab: Type2<F, A, B>) => Type2<F, L, B>
}
```

# AugmentedSemigroupoid3 (interface)

**Signature**

```ts
export interface AugmentedSemigroupoid3<F extends URIS3> extends Semigroupoid3<F> {
  readonly compose$: <U, L, A>(la: Type3<F, U, L, A>) => <B>(ab: Type3<F, U, A, B>) => Type3<F, U, L, B>
}
```

# AugmentedSemigroupoid4 (interface)

**Signature**

```ts
export interface AugmentedSemigroupoid4<F extends URIS4> extends Semigroupoid4<F> {
  readonly compose$: <X, U, L, A>(la: Type4<F, X, U, L, A>) => <B>(ab: Type4<F, X, U, A, B>) => Type4<F, X, U, L, B>
}
```

# augment (function)

**Signature**

```ts
export function augment<F extends URIS4, I>(
  I: { URI: F } & I
): I &
  (I extends Chain4<F>
    ? AugmentedChain4<F>
    : I extends Apply4<F>
    ? AugmentedApply4<F>
    : I extends Functor4<F>
    ? AugmentedFunctor4<F>
    : {}) &
  (I extends FunctorWithIndex4<F, infer Ix> ? AugmentedFunctorWithIndex4<F, Ix> : {}) &
  (I extends Bifunctor4<F> ? AugmentedBifunctor4<F> : {}) &
  (I extends Extend4<F> ? AugmentedExtend4<F> : {}) &
  (I extends FoldableWithIndex4<F, infer Ix>
    ? AugmentedFoldableWithIndex4<F, Ix>
    : I extends Foldable4<F>
    ? AugmentedFoldable4<F>
    : {}) &
  (I extends Alt4<F> ? AugmentedAlt4<F> : {}) &
  (I extends FilterableWithIndex4<F, infer Ix>
    ? AugmentedFilterableWithIndex4<F, Ix>
    : I extends Filterable4<F>
    ? AugmentedFilterable4<F>
    : {}) &
  (I extends Profunctor4<F> ? AugmentedProfunctor4<F> : {}) &
  (I extends Semigroupoid4<F> ? AugmentedSemigroupoid4<F> : {})
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
  (I extends Semigroupoid<F> ? AugmentedSemigroupoid<F> : {}) { ... }
```

Added in v2.0.0
