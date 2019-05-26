---
title: Array.ts
nav_order: 5
parent: Modules
---

# Overview

Adapted from https://github.com/purescript/purescript-arrays

---

<h2 class="text-delta">Table of contents</h2>

- [URI (type alias)](#uri-type-alias)
- [URI (constant)](#uri-constant)
- [array (constant)](#array-constant)
- [empty (constant)](#empty-constant)
- [alt (function)](#alt-function)
- [ap (function)](#ap-function)
- [chain (function)](#chain-function)
- [chop (function)](#chop-function)
- [chunksOf (function)](#chunksof-function)
- [compact (function)](#compact-function)
- [comprehension (function)](#comprehension-function)
- [cons (function)](#cons-function)
- [copy (function)](#copy-function)
- [deleteAt (function)](#deleteat-function)
- [difference (function)](#difference-function)
- [drop (function)](#drop-function)
- [dropRight (function)](#dropright-function)
- [dropWhile (function)](#dropwhile-function)
- [elem (function)](#elem-function)
- [extend (function)](#extend-function)
- [filter (function)](#filter-function)
- [filterMap (function)](#filtermap-function)
- [filterMapWithIndex (function)](#filtermapwithindex-function)
- [filterWithIndex (function)](#filterwithindex-function)
- [findFirst (function)](#findfirst-function)
- [findFirstMap (function)](#findfirstmap-function)
- [findIndex (function)](#findindex-function)
- [findLast (function)](#findlast-function)
- [findLastIndex (function)](#findlastindex-function)
- [findLastMap (function)](#findlastmap-function)
- [flatten (function)](#flatten-function)
- [fold (function)](#fold-function)
- [foldMap (function)](#foldmap-function)
- [foldMapWithIndex (function)](#foldmapwithindex-function)
- [foldRight (function)](#foldright-function)
- [getEq (function)](#geteq-function)
- [getMonoid (function)](#getmonoid-function)
- [getOrd (function)](#getord-function)
- [getShow (function)](#getshow-function)
- [head (function)](#head-function)
- [init (function)](#init-function)
- [insertAt (function)](#insertat-function)
- [intersection (function)](#intersection-function)
- [isEmpty (function)](#isempty-function)
- [isOutOfBound (function)](#isoutofbound-function)
- [last (function)](#last-function)
- [lefts (function)](#lefts-function)
- [lookup (function)](#lookup-function)
- [makeBy (function)](#makeby-function)
- [map (function)](#map-function)
- [mapWithIndex (function)](#mapwithindex-function)
- [modifyAt (function)](#modifyat-function)
- [of (function)](#of-function)
- [partition (function)](#partition-function)
- [partitionMap (function)](#partitionmap-function)
- [partitionMapWithIndex (function)](#partitionmapwithindex-function)
- [partitionWithIndex (function)](#partitionwithindex-function)
- [range (function)](#range-function)
- [reduce (function)](#reduce-function)
- [reduceRight (function)](#reduceright-function)
- [reduceRightWithIndex (function)](#reducerightwithindex-function)
- [reduceWithIndex (function)](#reducewithindex-function)
- [replicate (function)](#replicate-function)
- [reverse (function)](#reverse-function)
- [rights (function)](#rights-function)
- [rotate (function)](#rotate-function)
- [scan (function)](#scan-function)
- [scanRight (function)](#scanright-function)
- [separate (function)](#separate-function)
- [sequence (function)](#sequence-function)
- [snoc (function)](#snoc-function)
- [sort (function)](#sort-function)
- [sortBy (function)](#sortby-function)
- [span (function)](#span-function)
- [splitAt (function)](#splitat-function)
- [tail (function)](#tail-function)
- [take (function)](#take-function)
- [takeRight (function)](#takeright-function)
- [takeWhile (function)](#takewhile-function)
- [traverse (function)](#traverse-function)
- [traverseWithIndex (function)](#traversewithindex-function)
- [union (function)](#union-function)
- [uniq (function)](#uniq-function)
- [unsafeDeleteAt (function)](#unsafedeleteat-function)
- [unsafeInsertAt (function)](#unsafeinsertat-function)
- [unsafeUpdateAt (function)](#unsafeupdateat-function)
- [unzip (function)](#unzip-function)
- [updateAt (function)](#updateat-function)
- [wilt (function)](#wilt-function)
- [wither (function)](#wither-function)
- [zero (function)](#zero-function)
- [zip (function)](#zip-function)
- [zipWith (function)](#zipwith-function)

---

# URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

# URI (constant)

**Signature**

```ts
export const URI = ...
```

# array (constant)

**Signature**

```ts
export const array: Monad1<URI> &
  Foldable1<URI> &
  Unfoldable1<URI> &
  TraversableWithIndex1<URI, number> &
  Alternative1<URI> &
  Extend1<URI> &
  Compactable1<URI> &
  FilterableWithIndex1<URI, number> &
  Witherable1<URI> &
  FunctorWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> = ...
```

Added in v2.0.0

# empty (constant)

An empty array

**Signature**

```ts
export const empty: Array<never> = ...
```

Added in v2.0.0

# alt (function)

**Signature**

```ts
export const alt: Alternative1<URI>['alt'] = (fx, f) => ...
```

Added in v2.0.0

# ap (function)

**Signature**

```ts
export const ap: Monad1<URI>['ap'] = (mab, ma) => flatten(map(mab, f => ...
```

Added in v2.0.0

# chain (function)

**Signature**

```ts
export const chain: Monad1<URI>['chain'] = (ma, f) => ...
```

Added in v2.0.0

# chop (function)

A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input
array. Typically chop is called with some function that will consume an initial prefix of the array and produce a
value and the rest of the array.

**Signature**

```ts
export function chop<A, B>(as: Array<A>, f: (as: Array<A>) => [B, Array<A>]): Array<B> { ... }
```

**Example**

```ts
import { Eq, eqNumber } from 'fp-ts/lib/Eq'
import { chop, span } from 'fp-ts/lib/Array'

const group = <A>(E: Eq<A>) => (as: Array<A>): Array<Array<A>> => {
  return chop(as, as => {
    const { init, rest } = span(as, a => E.equals(a, as[0]))
    return [init, rest]
  })
}
assert.deepStrictEqual(group(eqNumber)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
```

Added in v2.0.0

# chunksOf (function)

Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
the array. Note that `chunksOf([], n)` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
definition of `chunksOf`; it satisfies the property that

```ts
chunksOf(xs, n).concat(chunksOf(ys, n)) == chunksOf(xs.concat(ys)), n)
```

whenever `n` evenly divides the length of `xs`.

**Signature**

```ts
export function chunksOf<A>(n: number, as: Array<A>): Array<Array<A>> { ... }
```

**Example**

```ts
import { chunksOf } from 'fp-ts/lib/Array'

assert.deepStrictEqual(chunksOf(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
```

Added in v2.0.0

# compact (function)

**Signature**

```ts
export const compact: Compactable1<URI>['compact'] = as => ...
```

Added in v2.0.0

# comprehension (function)

Array comprehension

```
[ f(x, y, ...) | x ← xs, y ← ys, ..., g(x, y, ...) ]
```

**Signature**

```ts
export function comprehension<A, B, C, D, R>(
  input: [Array<A>, Array<B>, Array<C>, Array<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean
): Array<R>
export function comprehension<A, B, C, R>(
  input: [Array<A>, Array<B>, Array<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean
): Array<R>
export function comprehension<A, R>(input: [Array<A>], f: (a: A) => R, g?: (a: A) => boolean): Array<R>
export function comprehension<A, B, R>(
  input: [Array<A>, Array<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean
): Array<R>
export function comprehension<A, R>(input: [Array<A>], f: (a: A) => boolean, g?: (a: A) => R): Array<R> { ... }
```

**Example**

```ts
import { comprehension } from 'fp-ts/lib/Array'
import { tuple } from 'fp-ts/lib/function'

assert.deepStrictEqual(comprehension([[1, 2, 3], ['a', 'b']], tuple, (a, b) => (a + b.length) % 2 === 0), [
  [1, 'a'],
  [1, 'b'],
  [3, 'a'],
  [3, 'b']
])
```

Added in v2.0.0

# cons (function)

Attaches an element to the front of an array, creating a new non empty array

**Signature**

```ts
export function cons<A>(head: A, tail: Array<A>): NonEmptyArray<A> { ... }
```

**Example**

```ts
import { cons } from 'fp-ts/lib/Array'

assert.deepStrictEqual(cons(0, [1, 2, 3]), [0, 1, 2, 3])
```

Added in v2.0.0

# copy (function)

**Signature**

```ts
export function copy<A>(as: Array<A>): Array<A> { ... }
```

Added in v2.0.0

# deleteAt (function)

Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds

**Signature**

```ts
export function deleteAt<A>(i: number, as: Array<A>): Option<Array<A>> { ... }
```

**Example**

```ts
import { deleteAt } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(deleteAt(0, [1, 2, 3]), some([2, 3]))
assert.deepStrictEqual(deleteAt(1, []), none)
```

Added in v2.0.0

# difference (function)

Creates an array of array values not included in the other given array using a `Eq` for equality
comparisons. The order and references of result values are determined by the first array.

**Signature**

```ts
export function difference<A>(E: Eq<A>): (xs: Array<A>, ys: Array<A>) => Array<A> { ... }
```

**Example**

```ts
import { difference } from 'fp-ts/lib/Array'
import { eqNumber } from 'fp-ts/lib/Eq'

assert.deepStrictEqual(difference(eqNumber)([1, 2], [2, 3]), [1])
```

Added in v2.0.0

# drop (function)

Drop a number of elements from the start of an array, creating a new array

**Signature**

```ts
export function drop<A>(n: number, as: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { drop } from 'fp-ts/lib/Array'

assert.deepStrictEqual(drop(2, [1, 2, 3]), [3])
```

Added in v2.0.0

# dropRight (function)

Drop a number of elements from the end of an array, creating a new array

**Signature**

```ts
export function dropRight<A>(n: number, as: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { dropRight } from 'fp-ts/lib/Array'

assert.deepStrictEqual(dropRight(2, [1, 2, 3, 4, 5]), [1, 2, 3])
```

Added in v2.0.0

# dropWhile (function)

Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array

**Signature**

```ts
export function dropWhile<A>(as: Array<A>, predicate: Predicate<A>): Array<A> { ... }
```

**Example**

```ts
import { dropWhile } from 'fp-ts/lib/Array'

assert.deepStrictEqual(dropWhile([1, 3, 2, 4, 5], n => n % 2 === 1), [2, 4, 5])
```

Added in v2.0.0

# elem (function)

Test if a value is a member of an array. Takes a `Eq<A>` as a single
argument which returns the function to use to search for a value of type `A` in
an array of type `Array<A>`.

**Signature**

```ts
export function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean { ... }
```

**Example**

```ts
import { elem } from 'fp-ts/lib/Array'
import { eqNumber } from 'fp-ts/lib/Eq'

assert.strictEqual(elem(eqNumber)(1, [1, 2, 3]), true)
assert.strictEqual(elem(eqNumber)(4, [1, 2, 3]), false)
```

Added in v2.0.0

# extend (function)

**Signature**

```ts
export const extend: Extend1<URI>['extend'] = (fa, f) => fa.map((_, i, as) => ...
```

Added in v2.0.0

# filter (function)

**Signature**

```ts
export const filter: Filterable1<URI>['filter'] = <A>(as: Array<A>, predicate: Predicate<A>): Array<A> => ...
```

Added in v2.0.0

# filterMap (function)

**Signature**

```ts
export const filterMap: Filterable1<URI>['filterMap'] = (as, f) => filterMapWithIndex(as, (_, a) => ...
```

Added in v2.0.0

# filterMapWithIndex (function)

**Signature**

```ts
export const filterMapWithIndex: FilterableWithIndex1<URI, number>['filterMapWithIndex'] = <A, B>(
  fa: Array<A>,
  f: (i: number, a: A) => Option<B>
): Array<B> => ...
```

Added in v2.0.0

# filterWithIndex (function)

**Signature**

```ts
export const filterWithIndex: FilterableWithIndex1<URI, number>['filterWithIndex'] = <A>(
  fa: Array<A>,
  predicateWithIndex: (i: number, a: A) => boolean
): Array<A> => ...
```

Added in v2.0.0

# findFirst (function)

Find the first element which satisfies a predicate (or a refinement) function

**Signature**

```ts
export function findFirst<A, B extends A>(as: Array<A>, refinement: Refinement<A, B>): Option<B>
export function findFirst<A>(as: Array<A>, predicate: Predicate<A>): Option<A> { ... }
```

**Example**

```ts
import { findFirst } from 'fp-ts/lib/Array'
import { some } from 'fp-ts/lib/Option'

assert.deepStrictEqual(findFirst([{ a: 1, b: 1 }, { a: 1, b: 2 }], x => x.a === 1), some({ a: 1, b: 1 }))
```

Added in v2.0.0

# findFirstMap (function)

Find the first element returned by an option based selector function

**Signature**

```ts
export function findFirstMap<A, B>(as: Array<A>, f: (a: A) => Option<B>): Option<B> { ... }
```

**Example**

```ts
import { findFirstMap } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

interface Person {
  name: string
  age?: number
}

const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]

// returns the name of the first person that has an age
assert.deepStrictEqual(findFirstMap(persons, p => (p.age === undefined ? none : some(p.name))), some('Mary'))
```

Added in v2.0.0

# findIndex (function)

Find the first index for which a predicate holds

**Signature**

```ts
export function findIndex<A>(as: Array<A>, predicate: Predicate<A>): Option<number> { ... }
```

**Example**

```ts
import { findIndex } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(findIndex([1, 2, 3], x => x === 2), some(1))
assert.deepStrictEqual(findIndex([], x => x === 2), none)
```

Added in v2.0.0

# findLast (function)

Find the last element which satisfies a predicate function

**Signature**

```ts
export function findLast<A, B extends A>(as: Array<A>, refinement: Refinement<A, B>): Option<B>
export function findLast<A>(as: Array<A>, predicate: Predicate<A>): Option<A> { ... }
```

**Example**

```ts
import { findLast } from 'fp-ts/lib/Array'
import { some } from 'fp-ts/lib/Option'

assert.deepStrictEqual(findLast([{ a: 1, b: 1 }, { a: 1, b: 2 }], x => x.a === 1), some({ a: 1, b: 2 }))
```

Added in v2.0.0

# findLastIndex (function)

Returns the index of the last element of the list which matches the predicate

**Signature**

```ts
export function findLastIndex<A>(as: Array<A>, predicate: Predicate<A>): Option<number> { ... }
```

**Example**

```ts
import { findLastIndex } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

interface X {
  a: number
  b: number
}
const xs: Array<X> = [{ a: 1, b: 0 }, { a: 1, b: 1 }]
assert.deepStrictEqual(findLastIndex(xs, x => x.a === 1), some(1))
assert.deepStrictEqual(findLastIndex(xs, x => x.a === 4), none)
```

Added in v2.0.0

# findLastMap (function)

Find the last element returned by an option based selector function

**Signature**

```ts
export function findLastMap<A, B>(as: Array<A>, f: (a: A) => Option<B>): Option<B> { ... }
```

**Example**

```ts
import { findLastMap } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

interface Person {
  name: string
  age?: number
}

const persons: Array<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]

// returns the name of the last person that has an age
assert.deepStrictEqual(findLastMap(persons, p => (p.age === undefined ? none : some(p.name))), some('Joey'))
```

Added in v2.0.0

# flatten (function)

Removes one level of nesting

**Signature**

```ts
export function flatten<A>(mma: Array<Array<A>>): Array<A> { ... }
```

**Example**

```ts
import { flatten } from 'fp-ts/lib/Array'

assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3])
```

Added in v2.0.0

# fold (function)

Break an array into its first element and remaining elements

**Signature**

```ts
export function fold<A, B>(as: Array<A>, onNil: () => B, onCons: (head: A, tail: Array<A>) => B): B { ... }
```

**Example**

```ts
import { fold } from 'fp-ts/lib/Array'

const len = <A>(as: Array<A>): number => fold(as, () => 0, (_, tail) => 1 + len(tail))
assert.strictEqual(len([1, 2, 3]), 3)
```

Added in v2.0.0

# foldMap (function)

**Signature**

```ts
export const foldMap: Foldable1<URI>['foldMap'] = M => ...
```

Added in v2.0.0

# foldMapWithIndex (function)

**Signature**

```ts
export const foldMapWithIndex: FoldableWithIndex1<URI, number>['foldMapWithIndex'] = M => (fa, f) =>
  fa.reduce((b, a, i) => ...
```

Added in v2.0.0

# foldRight (function)

Break an array into its initial elements and the last element

**Signature**

```ts
export function foldRight<A, B>(as: Array<A>, onNil: () => B, onCons: (init: Array<A>, last: A) => B): B { ... }
```

Added in v2.0.0

# getEq (function)

Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two
arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of
different lengths, the result is non equality.

**Signature**

```ts
export function getEq<A>(E: Eq<A>): Eq<Array<A>> { ... }
```

**Example**

```ts
import { eqString } from 'fp-ts/lib/Eq'
import { getEq } from 'fp-ts/lib/Array'

const E = getEq(eqString)
assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
assert.strictEqual(E.equals(['a'], []), false)
```

Added in v2.0.0

# getMonoid (function)

Returns a `Monoid` for `Array<A>`

**Signature**

```ts
export function getMonoid<A = never>(): Monoid<Array<A>> { ... }
```

**Example**

```ts
import { getMonoid } from 'fp-ts/lib/Array'

const M = getMonoid<number>()
assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
```

Added in v2.0.0

# getOrd (function)

Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such
arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in
case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have
the same length, the result is equality.

**Signature**

```ts
export function getOrd<A>(O: Ord<A>): Ord<Array<A>> { ... }
```

**Example**

```ts
import { getOrd } from 'fp-ts/lib/Array'
import { ordString } from 'fp-ts/lib/Ord'

const O = getOrd(ordString)
assert.strictEqual(O.compare(['b'], ['a']), 1)
assert.strictEqual(O.compare(['a'], ['a']), 0)
assert.strictEqual(O.compare(['a'], ['b']), -1)
```

Added in v2.0.0

# getShow (function)

**Signature**

```ts
export function getShow<A>(S: Show<A>): Show<Array<A>> { ... }
```

Added in v2.0.0

# head (function)

Get the first element in an array, or `None` if the array is empty

**Signature**

```ts
export function head<A>(as: Array<A>): Option<A> { ... }
```

**Example**

```ts
import { head } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(head([1, 2, 3]), some(1))
assert.deepStrictEqual(head([]), none)
```

Added in v2.0.0

# init (function)

Get all but the last element of an array, creating a new array, or `None` if the array is empty

**Signature**

```ts
export function init<A>(as: Array<A>): Option<Array<A>> { ... }
```

**Example**

```ts
import { init } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
assert.deepStrictEqual(init([]), none)
```

Added in v2.0.0

# insertAt (function)

Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds

**Signature**

```ts
export function insertAt<A>(i: number, a: A, as: Array<A>): Option<Array<A>> { ... }
```

**Example**

```ts
import { insertAt } from 'fp-ts/lib/Array'
import { some } from 'fp-ts/lib/Option'

assert.deepStrictEqual(insertAt(2, 5, [1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
```

Added in v2.0.0

# intersection (function)

Creates an array of unique values that are included in all given arrays using a `Eq` for equality
comparisons. The order and references of result values are determined by the first array.

**Signature**

```ts
export function intersection<A>(E: Eq<A>): (xs: Array<A>, ys: Array<A>) => Array<A> { ... }
```

**Example**

```ts
import { intersection } from 'fp-ts/lib/Array'
import { eqNumber } from 'fp-ts/lib/Eq'

assert.deepStrictEqual(intersection(eqNumber)([1, 2], [2, 3]), [2])
```

Added in v2.0.0

# isEmpty (function)

Test whether an array is empty

**Signature**

```ts
export function isEmpty<A>(as: Array<A>): boolean { ... }
```

**Example**

```ts
import { isEmpty } from 'fp-ts/lib/Array'

assert.strictEqual(isEmpty([]), true)
```

Added in v2.0.0

# isOutOfBound (function)

Test whether an array contains a particular index

**Signature**

```ts
export function isOutOfBound<A>(i: number, as: Array<A>): boolean { ... }
```

Added in v2.0.0

# last (function)

Get the last element in an array, or `None` if the array is empty

**Signature**

```ts
export function last<A>(as: Array<A>): Option<A> { ... }
```

**Example**

```ts
import { last } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(last([1, 2, 3]), some(3))
assert.deepStrictEqual(last([]), none)
```

Added in v2.0.0

# lefts (function)

Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order

**Signature**

```ts
export function lefts<L, A>(as: Array<Either<L, A>>): Array<L> { ... }
```

**Example**

```ts
import { lefts } from 'fp-ts/lib/Array'
import { left, right } from 'fp-ts/lib/Either'

assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
```

Added in v2.0.0

# lookup (function)

This function provides a safe way to read a value at a particular index from an array

**Signature**

```ts
export function lookup<A>(i: number, as: Array<A>): Option<A> { ... }
```

**Example**

```ts
import { lookup } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(lookup(1, [1, 2, 3]), some(2))
assert.deepStrictEqual(lookup(3, [1, 2, 3]), none)
```

Added in v2.0.0

# makeBy (function)

Return a list of length `n` with element `i` initialized with `f(i)`

**Signature**

```ts
export function makeBy<A>(n: number, f: (i: number) => A): Array<A> { ... }
```

**Example**

```ts
import { makeBy } from 'fp-ts/lib/Array'

const double = (n: number): number => n * 2
assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
```

Added in v2.0.0

# map (function)

**Signature**

```ts
export const map: Monad1<URI>['map'] = (ma, f) => ma.map(a => ...
```

Added in v2.0.0

# mapWithIndex (function)

**Signature**

```ts
export const mapWithIndex: FunctorWithIndex1<URI, number>['mapWithIndex'] = (fa, f) => fa.map((a, i) => ...
```

Added in v2.0.0

# modifyAt (function)

Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
of bounds

**Signature**

```ts
export function modifyAt<A>(i: number, as: Array<A>, f: (a: A) => A): Option<Array<A>> { ... }
```

**Example**

```ts
import { modifyAt } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

const double = (x: number): number => x * 2
assert.deepStrictEqual(modifyAt(1, [1, 2, 3], double), some([1, 4, 3]))
assert.deepStrictEqual(modifyAt(1, [], double), none)
```

Added in v2.0.0

# of (function)

**Signature**

```ts
export const of: Monad1<URI>['of'] = a => ...
```

Added in v2.0.0

# partition (function)

**Signature**

```ts
export const partition: Filterable1<URI>['partition'] = <A>(
  fa: Array<A>,
  predicate: Predicate<A>
): Separated<Array<A>, Array<A>> => ...
```

Added in v2.0.0

# partitionMap (function)

**Signature**

```ts
export const partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => partitionMapWithIndex(fa, (_, a) => ...
```

Added in v2.0.0

# partitionMapWithIndex (function)

**Signature**

```ts
export const partitionMapWithIndex: FilterableWithIndex1<URI, number>['partitionMapWithIndex'] = <RL, RR, A>(
  fa: Array<A>,
  f: (i: number, a: A) => Either<RL, RR>
): Separated<Array<RL>, Array<RR>> => ...
```

Added in v2.0.0

# partitionWithIndex (function)

**Signature**

```ts
export const partitionWithIndex: FilterableWithIndex1<URI, number>['partitionWithIndex'] = <A>(
  fa: Array<A>,
  predicateWithIndex: (i: number, a: A) => boolean
): Separated<Array<A>, Array<A>> => ...
```

Added in v2.0.0

# range (function)

Create an array containing a range of integers, including both endpoints

**Signature**

```ts
export function range(start: number, end: number): Array<number> { ... }
```

**Example**

```ts
import { range } from 'fp-ts/lib/Array'

assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
```

Added in v2.0.0

# reduce (function)

**Signature**

```ts
export const reduce: Foldable1<URI>['reduce'] = (fa, b, f) => reduceWithIndex(fa, b, (_, b, a) => ...
```

Added in v2.0.0

# reduceRight (function)

**Signature**

```ts
export const reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) =>
  reduceRightWithIndex(fa, b, (_, a, b) => ...
```

Added in v2.0.0

# reduceRightWithIndex (function)

**Signature**

```ts
export const reduceRightWithIndex: FoldableWithIndex1<URI, number>['reduceRightWithIndex'] = (fa, b, f) =>
  fa.reduceRight((b, a, i) => ...
```

Added in v2.0.0

# reduceWithIndex (function)

**Signature**

```ts
export const reduceWithIndex: FoldableWithIndex1<URI, number>['reduceWithIndex'] = (fa, b, f) => ...
```

Added in v2.0.0

# replicate (function)

Create an array containing a value repeated the specified number of times

**Signature**

```ts
export function replicate<A>(n: number, a: A): Array<A> { ... }
```

**Example**

```ts
import { replicate } from 'fp-ts/lib/Array'

assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
```

Added in v2.0.0

# reverse (function)

Reverse an array, creating a new array

**Signature**

```ts
export function reverse<A>(as: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { reverse } from 'fp-ts/lib/Array'

assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
```

Added in v2.0.0

# rights (function)

Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order

**Signature**

```ts
export function rights<L, A>(as: Array<Either<L, A>>): Array<A> { ... }
```

**Example**

```ts
import { rights } from 'fp-ts/lib/Array'
import { right, left } from 'fp-ts/lib/Either'

assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
```

Added in v2.0.0

# rotate (function)

Rotate an array to the right by `n` steps

**Signature**

```ts
export function rotate<A>(n: number, xs: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { rotate } from 'fp-ts/lib/Array'

assert.deepStrictEqual(rotate(2, [1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
```

Added in v2.0.0

# scan (function)

Same as `reduce` but it carries over the intermediate steps

```ts
import { scan } from 'fp-ts/lib/Array'

assert.deepStrictEqual(scan([1, 2, 3], 10, (b, a) => b - a), [10, 9, 7, 4])
```

**Signature**

```ts
export function scan<A, B>(as: Array<A>, b: B, f: (b: B, a: A) => B): Array<B> { ... }
```

Added in v2.0.0

# scanRight (function)

Fold an array from the right, keeping all intermediate results instead of only the final result

**Signature**

```ts
export function scanRight<A, B>(as: Array<A>, b: B, f: (a: A, b: B) => B): Array<B> { ... }
```

**Example**

```ts
import { scanRight } from 'fp-ts/lib/Array'

assert.deepStrictEqual(scanRight([1, 2, 3], 10, (a, b) => b - a), [4, 5, 7, 10])
```

Added in v2.0.0

# separate (function)

**Signature**

```ts
export const separate: Compactable1<URI>['separate'] = <RL, RR>(
  fa: Array<Either<RL, RR>>
): Separated<Array<RL>, Array<RR>> => ...
```

Added in v2.0.0

# sequence (function)

**Signature**

```ts
export const sequence: Traversable1<URI>['sequence'] = <F>(F: Applicative<F>) => <A>(
  ta: Array<HKT<F, A>>
): HKT<F, Array<A>> => ...
```

Added in v2.0.0

# snoc (function)

Append an element to the end of an array, creating a new non empty array

**Signature**

```ts
export function snoc<A>(init: Array<A>, end: A): NonEmptyArray<A> { ... }
```

**Example**

```ts
import { snoc } from 'fp-ts/lib/Array'

assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
```

Added in v2.0.0

# sort (function)

Sort the elements of an array in increasing order, creating a new array

**Signature**

```ts
export function sort<A>(O: Ord<A>): (as: Array<A>) => Array<A> { ... }
```

**Example**

```ts
import { sort } from 'fp-ts/lib/Array'
import { ordNumber } from 'fp-ts/lib/Ord'

assert.deepStrictEqual(sort(ordNumber)([3, 2, 1]), [1, 2, 3])
```

Added in v2.0.0

# sortBy (function)

Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
etc...

**Signature**

```ts
export function sortBy<A>(ords: Array<Ord<A>>): Endomorphism<Array<A>> { ... }
```

**Example**

```ts
import { sortBy } from 'fp-ts/lib/Array'
import { contramap, ordString, ordNumber } from 'fp-ts/lib/Ord'

interface Person {
  name: string
  age: number
}
const byName = contramap(ordString, (p: Person) => p.name)
const byAge = contramap(ordNumber, (p: Person) => p.age)

const sortByNameByAge = sortBy([byName, byAge])

const persons = [{ name: 'a', age: 1 }, { name: 'b', age: 3 }, { name: 'c', age: 2 }, { name: 'b', age: 2 }]
assert.deepStrictEqual(sortByNameByAge(persons), [
  { name: 'a', age: 1 },
  { name: 'b', age: 2 },
  { name: 'b', age: 3 },
  { name: 'c', age: 2 }
])
```

Added in v2.0.0

# span (function)

Split an array into two parts:

1. the longest initial subarray for which all elements satisfy the specified predicate
2. the remaining elements

**Signature**

```ts
export function span<A, B extends A>(as: Array<A>, refinement: Refinement<A, B>): { init: Array<B>; rest: Array<A> }
export function span<A>(as: Array<A>, predicate: Predicate<A>): { init: Array<A>; rest: Array<A> } { ... }
```

**Example**

```ts
import { span } from 'fp-ts/lib/Array'

assert.deepStrictEqual(span([1, 3, 2, 4, 5], n => n % 2 === 1), { init: [1, 3], rest: [2, 4, 5] })
```

Added in v2.0.0

# splitAt (function)

Splits an array into two pieces, the first piece has `n` elements.

**Signature**

```ts
export function splitAt<A>(n: number, as: Array<A>): [Array<A>, Array<A>] { ... }
```

**Example**

```ts
import { splitAt } from 'fp-ts/lib/Array'

assert.deepStrictEqual(splitAt(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4, 5]])
```

Added in v2.0.0

# tail (function)

Get all but the first element of an array, creating a new array, or `None` if the array is empty

**Signature**

```ts
export function tail<A>(as: Array<A>): Option<Array<A>> { ... }
```

**Example**

```ts
import { tail } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
assert.deepStrictEqual(tail([]), none)
```

Added in v2.0.0

# take (function)

Keep only a number of elements from the start of an array, creating a new array.
`n` must be a natural number

**Signature**

```ts
export function take<A>(n: number, as: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { take } from 'fp-ts/lib/Array'

assert.deepStrictEqual(take(2, [1, 2, 3]), [1, 2])
```

Added in v2.0.0

# takeRight (function)

Keep only a number of elements from the end of an array, creating a new array.
`n` must be a natural number

**Signature**

```ts
export function takeRight<A>(n: number, as: Array<A>): Array<A> { ... }
```

**Example**

```ts
import { takeRight } from 'fp-ts/lib/Array'

assert.deepStrictEqual(takeRight(2, [1, 2, 3, 4, 5]), [4, 5])
```

Added in v2.0.0

# takeWhile (function)

Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array

**Signature**

```ts
export function takeWhile<A, B extends A>(as: Array<A>, refinement: Refinement<A, B>): Array<B>
export function takeWhile<A>(as: Array<A>, predicate: Predicate<A>): Array<A> { ... }
```

**Example**

```ts
import { takeWhile } from 'fp-ts/lib/Array'

assert.deepStrictEqual(takeWhile([2, 4, 3, 6], n => n % 2 === 0), [2, 4])
```

Added in v2.0.0

# traverse (function)

**Signature**

```ts
export const traverse: Traversable1<URI>['traverse'] = <F>(
  F: Applicative<F>
): (<A, B>(ta: Array<A>, f: (a: A) => HKT<F, B>) => HKT<F, Array<B>>) => ...
```

Added in v2.0.0

# traverseWithIndex (function)

**Signature**

```ts
export const traverseWithIndex: TraversableWithIndex1<URI, number>['traverseWithIndex'] = <F>(F: Applicative<F>) => <
  A,
  B
>(
  ta: Array<A>,
  f: (i: number, a: A) => HKT<F, B>
): HKT<F, Array<B>> => ...
```

Added in v2.0.0

# union (function)

Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons

**Signature**

```ts
export function union<A>(E: Eq<A>): (xs: Array<A>, ys: Array<A>) => Array<A> { ... }
```

**Example**

```ts
import { union } from 'fp-ts/lib/Array'
import { eqNumber } from 'fp-ts/lib/Eq'

assert.deepStrictEqual(union(eqNumber)([1, 2], [2, 3]), [1, 2, 3])
```

Added in v2.0.0

# uniq (function)

Remove duplicates from an array, keeping the first occurance of an element.

**Signature**

```ts
export function uniq<A>(E: Eq<A>): (as: Array<A>) => Array<A> { ... }
```

**Example**

```ts
import { uniq } from 'fp-ts/lib/Array'
import { eqNumber } from 'fp-ts/lib/Eq'

assert.deepStrictEqual(uniq(eqNumber)([1, 2, 1]), [1, 2])
```

Added in v2.0.0

# unsafeDeleteAt (function)

**Signature**

```ts
export function unsafeDeleteAt<A>(i: number, as: Array<A>): Array<A> { ... }
```

Added in v2.0.0

# unsafeInsertAt (function)

**Signature**

```ts
export function unsafeInsertAt<A>(i: number, a: A, as: Array<A>): Array<A> { ... }
```

Added in v2.0.0

# unsafeUpdateAt (function)

**Signature**

```ts
export function unsafeUpdateAt<A>(i: number, a: A, as: Array<A>): Array<A> { ... }
```

Added in v2.0.0

# unzip (function)

The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays

**Signature**

```ts
export function unzip<A, B>(as: Array<[A, B]>): [Array<A>, Array<B>] { ... }
```

**Example**

```ts
import { unzip } from 'fp-ts/lib/Array'

assert.deepStrictEqual(unzip([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']])
```

Added in v2.0.0

# updateAt (function)

Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds

**Signature**

```ts
export function updateAt<A>(i: number, a: A, as: Array<A>): Option<Array<A>> { ... }
```

**Example**

```ts
import { updateAt } from 'fp-ts/lib/Array'
import { some, none } from 'fp-ts/lib/Option'

assert.deepStrictEqual(updateAt(1, 1, [1, 2, 3]), some([1, 1, 3]))
assert.deepStrictEqual(updateAt(1, 1, []), none)
```

Added in v2.0.0

# wilt (function)

**Signature**

```ts
export const wilt: Witherable1<URI>['wilt'] = <F>(
  F: Applicative<F>
): (<RL, RR, A>(wa: Array<A>, f: (a: A) => HKT<F, Either<RL, RR>>) => HKT<F, Separated<Array<RL>, Array<RR>>>) => ...
```

Added in v2.0.0

# wither (function)

**Signature**

```ts
export const wither: Witherable1<URI>['wither'] = <F>(
  F: Applicative<F>
): (<A, B>(ta: Array<A>, f: (a: A) => HKT<F, Option<B>>) => HKT<F, Array<B>>) => ...
```

Added in v2.0.0

# zero (function)

**Signature**

```ts
export const zero: Alternative1<URI>['zero'] = () => ...
```

Added in v2.0.0

# zip (function)

Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
longer array are discarded

**Signature**

```ts
export function zip<A, B>(fa: Array<A>, fb: Array<B>): Array<[A, B]> { ... }
```

**Example**

```ts
import { zip } from 'fp-ts/lib/Array'

assert.deepStrictEqual(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [[1, 'a'], [2, 'b'], [3, 'c']])
```

Added in v2.0.0

# zipWith (function)

Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
input array is short, excess elements of the longer array are discarded.

**Signature**

```ts
export function zipWith<A, B, C>(fa: Array<A>, fb: Array<B>, f: (a: A, b: B) => C): Array<C> { ... }
```

**Example**

```ts
import { zipWith } from 'fp-ts/lib/Array'

assert.deepStrictEqual(zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n), ['a1', 'b2', 'c3'])
```

Added in v2.0.0
