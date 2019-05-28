---
title: Tuple.ts
nav_order: 87
parent: Modules
---

# Overview

Adapted from https://github.com/purescript/purescript-tuples

---

<h2 class="text-delta">Table of contents</h2>

- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [extract (constant)](#extract-constant)
- [tuple (constant)](#tuple-constant)
- [bimap (function)](#bimap-function)
- [compose (function)](#compose-function)
- [extend (function)](#extend-function)
- [foldMap (function)](#foldmap-function)
- [fst (function)](#fst-function)
- [getApplicative (function)](#getapplicative-function)
- [getApply (function)](#getapply-function)
- [getChain (function)](#getchain-function)
- [getChainRec (function)](#getchainrec-function)
- [getMonad (function)](#getmonad-function)
- [map (function)](#map-function)
- [mapLeft (function)](#mapleft-function)
- [reduce (function)](#reduce-function)
- [reduceRight (function)](#reduceright-function)
- [sequence (function)](#sequence-function)
- [snd (function)](#snd-function)
- [swap (function)](#swap-function)
- [traverse (function)](#traverse-function)

---

# URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v2.0.0

# URI (constant)

**Signature**

```ts
export const URI = ...
```

Added in v2.0.0

# extract (constant)

**Signature**

```ts
export const extract: Comonad2<URI>['extract'] = ...
```

Added in v2.0.0

# tuple (constant)

**Signature**

```ts
export const tuple: Semigroupoid2<URI> & Bifunctor2<URI> & Comonad2<URI> & Foldable2<URI> & Traversable2<URI> = ...
```

Added in v2.0.0

# bimap (function)

**Signature**

```ts
export const bimap: Bifunctor2<URI>['bimap'] = (fla, f, g) => ...
```

Added in v2.0.0

# compose (function)

**Signature**

```ts
export const compose: Semigroupoid2<URI>['compose'] = (ba, al) => ...
```

Added in v2.0.0

# extend (function)

**Signature**

```ts
export const extend: Comonad2<URI>['extend'] = (wa, f) => ...
```

Added in v2.0.0

# foldMap (function)

**Signature**

```ts
export const foldMap: Foldable2<URI>['foldMap'] = _ => (fa, f) => ...
```

Added in v2.0.0

# fst (function)

**Signature**

```ts
export function fst<A, S>(sa: [A, S]): A { ... }
```

Added in v2.0.0

# getApplicative (function)

**Signature**

```ts
export function getApplicative<S>(M: Monoid<S>): Applicative2C<URI, S> { ... }
```

Added in v2.0.0

# getApply (function)

**Signature**

```ts
export function getApply<S>(S: Semigroup<S>): Apply2C<URI, S> { ... }
```

Added in v2.0.0

# getChain (function)

**Signature**

```ts
export function getChain<S>(S: Semigroup<S>): Chain2C<URI, S> { ... }
```

Added in v2.0.0

# getChainRec (function)

**Signature**

```ts
export function getChainRec<S>(M: Monoid<S>): ChainRec2C<URI, S> { ... }
```

Added in v2.0.0

# getMonad (function)

**Signature**

```ts
export function getMonad<S>(M: Monoid<S>): Monad2C<URI, S> { ... }
```

Added in v2.0.0

# map (function)

**Signature**

```ts
export const map: Functor2<URI>['map'] = (fa, f) => ...
```

Added in v2.0.0

# mapLeft (function)

**Signature**

```ts
export const mapLeft: Bifunctor2<URI>['mapLeft'] = (fla, f) => ...
```

Added in v2.0.0

# reduce (function)

**Signature**

```ts
export const reduce: Foldable2<URI>['reduce'] = (fa, b, f) => ...
```

Added in v2.0.0

# reduceRight (function)

**Signature**

```ts
export const reduceRight: Foldable2<URI>['reduceRight'] = (fa, b, f) => ...
```

Added in v2.0.0

# sequence (function)

**Signature**

```ts
export const sequence: Traversable2<URI>['sequence'] = <F>(F: Applicative<F>) => <A, S>(
  ta: [HKT<F, A>, S]
): HKT<F, [A, S]> => ...
```

Added in v2.0.0

# snd (function)

**Signature**

```ts
export function snd<A, S>(sa: [A, S]): S { ... }
```

Added in v2.0.0

# swap (function)

**Signature**

```ts
export function swap<A, S>(sa: [A, S]): [S, A] { ... }
```

Added in v2.0.0

# traverse (function)

**Signature**

```ts
export const traverse: Traversable2<URI>['traverse'] = <F>(F: Applicative<F>) => <A, S, B>(
  ta: [A, S],
  f: (a: A) => HKT<F, B>
): HKT<F, [B, S]> => ...
```

Added in v2.0.0
