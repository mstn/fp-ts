---
title: Reader.ts
nav_order: 64
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Reader (interface)](#reader-interface)
- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [ap (constant)](#ap-constant)
- [ask (constant)](#ask-constant)
- [asks (constant)](#asks-constant)
- [chain (constant)](#chain-constant)
- [local (constant)](#local-constant)
- [map (constant)](#map-constant)
- [of (constant)](#of-constant)
- [reader (constant)](#reader-constant)
- [compose (function)](#compose-function)
- [first (function)](#first-function)
- [getMonoid (function)](#getmonoid-function)
- [getSemigroup (function)](#getsemigroup-function)
- [id (function)](#id-function)
- [left (function)](#left-function)
- [promap (function)](#promap-function)
- [right (function)](#right-function)
- [second (function)](#second-function)

---

# Reader (interface)

**Signature**

```ts
export interface Reader<R, A> {
  (r: R): A
}
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

# ap (constant)

**Signature**

```ts
export const ap: Monad2<URI>['ap'] = ...
```

Added in v2.0.0

# ask (constant)

Reads the current context

**Signature**

```ts
export const ask: <R>() => Reader<R, R> = ...
```

Added in v2.0.0

# asks (constant)

Projects a value from the global context in a Reader

**Signature**

```ts
export const asks: <R, A>(f: (r: R) => A) => Reader<R, A> = ...
```

Added in v2.0.0

# chain (constant)

**Signature**

```ts
export const chain: Monad2<URI>['chain'] = ...
```

Added in v2.0.0

# local (constant)

changes the value of the local context during the execution of the action `ma`

**Signature**

```ts
export const local: <Q, R>(f: (d: Q) => R) => <A>(ma: Reader<R, A>) => Reader<Q, A> = ...
```

Added in v2.0.0

# map (constant)

**Signature**

```ts
export const map: Monad2<URI>['map'] = ...
```

Added in v2.0.0

# of (constant)

**Signature**

```ts
export const of: Monad2<URI>['of'] = ...
```

Added in v2.0.0

# reader (constant)

**Signature**

```ts
export const reader: Monad2<URI> & Profunctor2<URI> & Category2<URI> & Strong2<URI> & Choice2<URI> = ...
```

Added in v2.0.0

# compose (function)

**Signature**

```ts
export const compose: Category2<URI>['compose'] = (ab, la) => l => ...
```

Added in v2.0.0

# first (function)

**Signature**

```ts
export const first: Strong2<URI>['first'] = pab => ([a, c]) => ...
```

Added in v2.0.0

# getMonoid (function)

**Signature**

```ts
export function getMonoid<R, A>(M: Monoid<A>): Monoid<Reader<R, A>> { ... }
```

Added in v2.0.0

# getSemigroup (function)

**Signature**

```ts
export function getSemigroup<R, A>(S: Semigroup<A>): Semigroup<Reader<R, A>> { ... }
```

Added in v2.0.0

# id (function)

**Signature**

```ts
export const id: Category2<URI>['id'] = () => a => ...
```

Added in v2.0.0

# left (function)

**Signature**

```ts
export const left: Choice2<URI>['left'] = <A, B, C>(pab: Reader<A, B>): Reader<E.Either<A, C>, E.Either<B, C>> =>
  E.fold$<A, C, E.Either<B, C>>(a => ...
```

Added in v2.0.0

# promap (function)

**Signature**

```ts
export const promap: Profunctor2<URI>['promap'] = (mbc, f, g) => a => ...
```

Added in v2.0.0

# right (function)

**Signature**

```ts
export const right: Choice2<URI>['right'] = <A, B, C>(pbc: Reader<B, C>): Reader<E.Either<A, B>, E.Either<A, C>> =>
  E.fold$<A, B, E.Either<A, C>>(E.left, b => ...
```

Added in v2.0.0

# second (function)

**Signature**

```ts
export const second: Strong2<URI>['second'] = pbc => ([a, b]) => ...
```

Added in v2.0.0
