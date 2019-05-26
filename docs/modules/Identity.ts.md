---
title: Identity.ts
nav_order: 40
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Identity (type alias)](#identity-type-alias)
- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [alt (constant)](#alt-constant)
- [extract (constant)](#extract-constant)
- [getEq (constant)](#geteq-constant)
- [getShow (constant)](#getshow-constant)
- [identity (constant)](#identity-constant)
- [of (constant)](#of-constant)
- [ap (function)](#ap-function)
- [chain (function)](#chain-function)
- [extend (function)](#extend-function)
- [foldMap (function)](#foldmap-function)
- [map (function)](#map-function)
- [reduce (function)](#reduce-function)
- [reduceRight (function)](#reduceright-function)
- [sequence (function)](#sequence-function)
- [traverse (function)](#traverse-function)

---

# Identity (type alias)

**Signature**

```ts
export type Identity<A> = A
```

Added in v2.0.0

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

# alt (constant)

**Signature**

```ts
export const alt: Alt1<URI>['alt'] = ...
```

Added in v2.0.0

# extract (constant)

**Signature**

```ts
export const extract: Comonad1<URI>['extract'] = ...
```

Added in v2.0.0

# getEq (constant)

**Signature**

```ts
export const getEq: <A>(E: Eq<A>) => Eq<Identity<A>> = ...
```

Added in v2.0.0

# getShow (constant)

**Signature**

```ts
export const getShow: <A>(S: Show<A>) => Show<Identity<A>> = ...
```

Added in v2.0.0

# identity (constant)

**Signature**

```ts
export const identity: Monad1<URI> & Foldable1<URI> & Traversable1<URI> & Alt1<URI> & Comonad1<URI> & ChainRec1<URI> = ...
```

Added in v2.0.0

# of (constant)

**Signature**

```ts
export const of: Monad1<URI>['of'] = ...
```

Added in v2.0.0

# ap (function)

**Signature**

```ts
export const ap: Monad1<URI>['ap'] = (mab, ma) => ...
```

Added in v2.0.0

# chain (function)

**Signature**

```ts
export const chain: Monad1<URI>['chain'] = (ma, f) => ...
```

Added in v2.0.0

# extend (function)

**Signature**

```ts
export const extend: Comonad1<URI>['extend'] = (wa, f) => ...
```

Added in v2.0.0

# foldMap (function)

**Signature**

```ts
export const foldMap: Foldable1<URI>['foldMap'] = _ => (fa, f) => ...
```

Added in v2.0.0

# map (function)

**Signature**

```ts
export const map: Monad1<URI>['map'] = (ma, f) => ...
```

Added in v2.0.0

# reduce (function)

**Signature**

```ts
export const reduce: Foldable1<URI>['reduce'] = (fa, b, f) => ...
```

Added in v2.0.0

# reduceRight (function)

**Signature**

```ts
export const reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) => ...
```

Added in v2.0.0

# sequence (function)

**Signature**

```ts
export const sequence: Traversable1<URI>['sequence'] = <F>(F: Applicative<F>) => <A>(
  ta: Identity<HKT<F, A>>
): HKT<F, Identity<A>> => ...
```

Added in v2.0.0

# traverse (function)

**Signature**

```ts
export const traverse: Traversable1<URI>['traverse'] = <F>(F: Applicative<F>) => <A, B>(
  ta: Identity<A>,
  f: (a: A) => HKT<F, B>
): HKT<F, Identity<B>> => ...
```

Added in v2.0.0
