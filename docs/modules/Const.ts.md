---
title: Const.ts
nav_order: 21
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Const (type alias)](#const-type-alias)
- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [const\_ (constant)](#const_-constant)
- [contramap (constant)](#contramap-constant)
- [getEq (constant)](#geteq-constant)
- [make (constant)](#make-constant)
- [map (constant)](#map-constant)
- [getApplicative (function)](#getapplicative-function)
- [getApply (function)](#getapply-function)
- [getShow (function)](#getshow-function)
- [map\$ (export)](#map-export)

---

# Const (type alias)

**Signature**

```ts
export type Const<L, A> = L & { readonly _A: A }
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

# const\_ (constant)

**Signature**

```ts
export const const_: Functor2<URI> & Contravariant2<URI> = ...
```

Added in v2.0.0

# contramap (constant)

**Signature**

```ts
export const contramap: Contravariant2<URI>['contramap'] = ...
```

Added in v2.0.0

# getEq (constant)

**Signature**

```ts
export const getEq: <L, A>(E: Eq<L>) => Eq<Const<L, A>> = ...
```

Added in v2.0.0

# make (constant)

**Signature**

```ts
export const make: <L>(l: L) => Const<L, never> = ...
```

Added in v2.0.0

# map (constant)

**Signature**

```ts
export const map: Functor2<URI>['map'] = ...
```

Added in v2.0.0

# getApplicative (function)

**Signature**

```ts
export function getApplicative<L>(M: Monoid<L>): Applicative2C<URI, L> { ... }
```

Added in v2.0.0

# getApply (function)

**Signature**

```ts
export function getApply<L>(S: Semigroup<L>): Apply2C<URI, L> { ... }
```

Added in v2.0.0

# getShow (function)

**Signature**

```ts
export function getShow<L, A>(S: Show<L>): Show<Const<L, A>> { ... }
```

Added in v2.0.0

# map\$ (export)

**Signature**

```ts
export { map$ }
```
