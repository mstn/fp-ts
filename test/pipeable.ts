import * as assert from 'assert'
import { array } from '../src/Array'
import { pipeable } from '../src/pipeable'
import { either, right, left } from '../src/Either'
import { monoidSum, fold } from '../src/Monoid'
import * as O from '../src/Option'
import { reader } from '../src/Reader'

describe('pipeable', () => {
  it('{}', () => {
    const r = pipeable<'{}', {}>({ URI: '{}' })
    assert.deepStrictEqual(r, { URI: '{}' })
  })

  it('Functor', () => {
    const { map$ } = pipeable(array)
    assert.deepStrictEqual(map$((n: number) => n * 2)([1, 2, 3]), [2, 4, 6])
  })

  it('FunctorWithIndex', () => {
    const { mapWithIndex$ } = pipeable(array)
    assert.deepStrictEqual(mapWithIndex$((i, n: number) => n * 2 + i)([1, 2, 3]), [2, 5, 8])
  })

  it('Apply', () => {
    const { ap$, apFirst$, apSecond$ } = pipeable(array)
    assert.deepStrictEqual(ap$([1, 2, 3])([n => n * 2]), [2, 4, 6])
    assert.deepStrictEqual(apFirst$([2])([1]), [1])
    assert.deepStrictEqual(apSecond$([2])([1]), [2])
  })

  it('Chain', () => {
    const { chain$, chainFirst$, flatten } = pipeable(array)
    assert.deepStrictEqual(chain$((n: number) => [n * 2])([1, 2, 3]), [2, 4, 6])
    assert.deepStrictEqual(chainFirst$((n: number) => [n * 2])([1, 2, 3]), [1, 2, 3])
    assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3])
  })

  it('Extend', () => {
    const { extend$, duplicate } = pipeable(array)
    assert.deepStrictEqual(extend$((as: Array<number>) => fold(monoidSum)(as))([1, 2, 3]), [6, 5, 3])
    assert.deepStrictEqual(duplicate([1, 2, 3]), [[1, 2, 3], [2, 3], [3]])
  })

  it('Bifunctor', () => {
    const { bimap$, mapLeft$ } = pipeable(either)
    assert.deepStrictEqual(bimap$((s: string) => s.length, (n: number) => n * 2)(right(1)), right(2))
    assert.deepStrictEqual(bimap$((s: string) => s.length, (n: number) => n * 2)(left('aa')), left(2))
    assert.deepStrictEqual(mapLeft$((s: string) => s.length)(right(1)), right(1))
    assert.deepStrictEqual(mapLeft$((s: string) => s.length)(left('aa')), left(2))
  })

  it('Foldable', () => {
    const { reduce$, foldMap$, reduceRight$ } = pipeable(array)
    assert.deepStrictEqual(reduce$(0, (acc, n: number) => acc + n)([1, 2, 3]), 6)
    assert.deepStrictEqual(foldMap$(monoidSum)((n: number) => n)([1, 2, 3]), 6)
    assert.deepStrictEqual(reduceRight$(0, (n: number, acc) => -acc + n)([1, 2, 3]), 2)
  })

  it('FoldableWithIndex', () => {
    const { reduceWithIndex$, foldMapWithIndex$, reduceRightWithIndex$ } = pipeable(array)
    assert.deepStrictEqual(reduceWithIndex$(0, (i, acc, n: number) => acc + n + i)([1, 2, 3]), 9)
    assert.deepStrictEqual(foldMapWithIndex$(monoidSum)((i, n: number) => n + i)([1, 2, 3]), 9)
    assert.deepStrictEqual(reduceRightWithIndex$(0, (i, n: number, acc) => -acc + n + i)([1, 2, 3]), 3)
  })

  it('Alt', () => {
    const { alt$ } = pipeable(array)
    assert.deepStrictEqual(alt$(() => [4, 5, 6])([1, 2, 3]), [1, 2, 3, 4, 5, 6])
  })

  it('Filterable', () => {
    const { filter$, filterMap$, partition$, partitionMap$ } = pipeable(array)
    assert.deepStrictEqual(filter$(O.isSome)([O.some(1), O.none, O.some(2)]), [O.some(1), O.some(2)])
    assert.deepStrictEqual(filterMap$(<A>(a: O.Option<A>) => a)([O.some(1), O.none, O.some(2)]), [1, 2])
    assert.deepStrictEqual(partition$(O.isSome)([O.some(1), O.none, O.some(2)]), {
      left: [O.none],
      right: [O.some(1), O.some(2)]
    })
    assert.deepStrictEqual(partitionMap$((n: number) => (n > 2 ? right(n) : left(String(n))))([1, 2, 3]), {
      left: ['1', '2'],
      right: [3]
    })
  })

  it('FilterableWithIndex', () => {
    const { filterWithIndex$, filterMapWithIndex$, partitionWithIndex$, partitionMapWithIndex$ } = pipeable(array)
    assert.deepStrictEqual(
      filterWithIndex$((i, a: O.Option<number>) => i > 1 && O.isSome(a))([O.some(1), O.none, O.some(2)]),
      [O.some(2)]
    )
    assert.deepStrictEqual(
      filterMapWithIndex$((i, a: O.Option<number>) => O.map(a, n => n + i))([O.some(1), O.none, O.some(2)]),
      [1, 4]
    )
    assert.deepStrictEqual(
      partitionWithIndex$((i, a: O.Option<number>) => i > 1 && O.isSome(a))([O.some(1), O.none, O.some(2)]),
      {
        left: [O.some(1), O.none],
        right: [O.some(2)]
      }
    )
    assert.deepStrictEqual(
      partitionMapWithIndex$((i, n: number) => (i < 2 && n > 1 ? right(n) : left(String(n))))([1, 2, 3]),
      {
        left: ['1', '3'],
        right: [2]
      }
    )
  })

  it('Profunctor', () => {
    const { promap$ } = pipeable(reader)
    const f = promap$((s: string) => s + 'a', (n: number) => n > 2)((s: string) => s.length)
    assert.strictEqual(f('a'), false)
    assert.strictEqual(f('aa'), true)
  })

  it('Semigroupoid', () => {
    const { compose$ } = pipeable(reader)
    assert.strictEqual(compose$((s: string) => s.length)(n => n * 2)('aa'), 4)
  })
})
