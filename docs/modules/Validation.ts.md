---
title: Validation.ts
nav_order: 89
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [getAlt (function)](#getalt-function)
- [getApplicative (function)](#getapplicative-function)
- [getMonad (function)](#getmonad-function)
- [getMonoid (function)](#getmonoid-function)
- [getSemigroup (function)](#getsemigroup-function)

---

# getAlt (function)

**Signature**

```ts
export function getAlt<E>(S: Semigroup<E>): Alt2C<URI, E> { ... }
```

Added in v2.0.0

# getApplicative (function)

**Signature**

```ts
export function getApplicative<E>(
  S: Semigroup<E>
): Applicative2C<URI, E> & Foldable2C<URI, E> & Traversable2C<URI, E> & Bifunctor2C<URI, E> & Extend2C<URI, E> { ... }
```

# getMonad (function)

**Note**: This function is here just to avoid switching to / from `Either`

**Signature**

```ts
export function getMonad<E>(
  S: Semigroup<E>
): Monad2C<URI, E> & Foldable2C<URI, E> & Traversable2C<URI, E> & Bifunctor2C<URI, E> & Extend2C<URI, E> { ... }
```

Added in v2.0.0

# getMonoid (function)

**Signature**

```ts
export function getMonoid<E, A>(SE: Semigroup<E>, SA: Monoid<A>): Monoid<Either<E, A>> { ... }
```

Added in v2.0.0

# getSemigroup (function)

**Signature**

```ts
export function getSemigroup<E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<Either<E, A>> { ... }
```

Added in v2.0.0
