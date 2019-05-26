---
title: Traced.ts
nav_order: 83
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Traced (interface)](#traced-interface)
- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [traced (constant)](#traced-constant)
- [censor (function)](#censor-function)
- [censor\$ (function)](#censor-function)
- [getComonad (function)](#getcomonad-function)
- [listen (function)](#listen-function)
- [listens (function)](#listens-function)
- [listens\$ (function)](#listens-function)
- [map (function)](#map-function)
- [tracks (function)](#tracks-function)
- [tracks\$ (function)](#tracks-function)
- [map\$ (export)](#map-export)

---

# Traced (interface)

**Signature**

```ts
export interface Traced<P, A> {
  (p: P): A
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

# traced (constant)

**Signature**

```ts
export const traced: Functor2<URI> = ...
```

Added in v2.0.0

# censor (function)

Apply a function to the current position

**Signature**

```ts
export function censor<P, A>(wa: Traced<P, A>, f: (p: P) => P): Traced<P, A> { ... }
```

Added in v2.0.0

# censor\$ (function)

Data-last version of `censor`

**Signature**

```ts
export function censor$<P>(f: (p: P) => P): <A>(wa: Traced<P, A>) => Traced<P, A> { ... }
```

Added in v2.0.0

# getComonad (function)

**Signature**

```ts
export function getComonad<P>(M: Monoid<P>): Comonad2C<URI, P> { ... }
```

Added in v2.0.0

# listen (function)

Get the current position

**Signature**

```ts
export function listen<P, A>(wa: Traced<P, A>): Traced<P, [A, P]> { ... }
```

Added in v2.0.0

# listens (function)

Get a value which depends on the current position

**Signature**

```ts
export function listens<P, A, B>(wa: Traced<P, A>, f: (p: P) => B): Traced<P, [A, B]> { ... }
```

Added in v2.0.0

# listens\$ (function)

Data-last version of `listens`

**Signature**

```ts
export function listens$<P, B>(f: (p: P) => B): <A>(wa: Traced<P, A>) => Traced<P, [A, B]> { ... }
```

Added in v2.0.0

# map (function)

**Signature**

```ts
export const map: Functor2<URI>['map'] = (fa, f) => p => ...
```

Added in v2.0.0

# tracks (function)

Extracts a value at a relative position which depends on the current value.

**Signature**

```ts
export function tracks<P>(M: Monoid<P>): <A>(wa: Traced<P, A>, f: (a: A) => P) => A { ... }
```

Added in v2.0.0

# tracks\$ (function)

Data-last version of `tracks`

**Signature**

```ts
export function tracks$<P>(M: Monoid<P>): <A>(f: (a: A) => P) => (wa: Traced<P, A>) => A { ... }
```

Added in v2.0.0

# map\$ (export)

**Signature**

```ts
export { map$ }
```
