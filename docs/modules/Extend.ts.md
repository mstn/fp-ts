---
title: Extend.ts
nav_order: 27
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Extend (interface)](#extend-interface)
- [Extend1 (interface)](#extend1-interface)
- [Extend2 (interface)](#extend2-interface)
- [Extend2C (interface)](#extend2c-interface)
- [Extend3 (interface)](#extend3-interface)
- [Extend4 (interface)](#extend4-interface)

---

# Extend (interface)

**Signature**

```ts
export interface Extend<W> extends Functor<W> {
  readonly extend: <A, B>(wa: HKT<W, A>, f: (wa: HKT<W, A>) => B) => HKT<W, B>
}
```

Added in v2.0.0

# Extend1 (interface)

**Signature**

```ts
export interface Extend1<W extends URIS> extends Functor1<W> {
  readonly extend: <A, B>(wa: Type<W, A>, f: (wa: Type<W, A>) => B) => Type<W, B>
}
```

Added in v2.0.0

# Extend2 (interface)

**Signature**

```ts
export interface Extend2<W extends URIS2> extends Functor2<W> {
  readonly extend: <L, A, B>(wa: Type2<W, L, A>, f: (wa: Type2<W, L, A>) => B) => Type2<W, L, B>
}
```

Added in v2.0.0

# Extend2C (interface)

**Signature**

```ts
export interface Extend2C<W extends URIS2, L> extends Functor2C<W, L> {
  readonly extend: <A, B>(wa: Type2<W, L, A>, f: (wa: Type2<W, L, A>) => B) => Type2<W, L, B>
}
```

Added in v2.0.0

# Extend3 (interface)

**Signature**

```ts
export interface Extend3<W extends URIS3> extends Functor3<W> {
  readonly extend: <U, L, A, B>(wa: Type3<W, U, L, A>, f: (wa: Type3<W, U, L, A>) => B) => Type3<W, U, L, B>
}
```

Added in v2.0.0

# Extend4 (interface)

**Signature**

```ts
export interface Extend4<W extends URIS4> extends Functor4<W> {
  readonly extend: <X, U, L, A, B>(wa: Type4<W, X, U, L, A>, f: (wa: Type4<W, X, U, L, A>) => B) => Type4<W, X, U, L, B>
}
```

Added in v2.0.0
