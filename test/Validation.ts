import * as assert from 'assert'
import * as E from '../src/Either'
import * as _ from '../src/Validation'
import { monoidString, monoidSum } from '../src/Monoid'
import { semigroupString } from '../src/Semigroup'
import { getMonoid as getArrayMonoid } from '../src/Array'

describe('Validation', () => {
  it('getValidationMonad', () => {
    const M = _.getMonad(monoidString)
    const f = (s: string) => E.right(s.length)
    assert.deepStrictEqual(M.chain(E.right('abc'), f), E.right(3))
    assert.deepStrictEqual(M.chain(E.left('a'), f), E.left('a'))
    assert.deepStrictEqual(M.chain(E.left('a'), () => E.left('b')), E.left('a'))
    assert.deepStrictEqual(M.of(1), E.right(1))
    const double = (n: number) => n * 2
    assert.deepStrictEqual(M.ap(E.right(double), E.right(1)), E.right(2))
    assert.deepStrictEqual(M.ap(E.right(double), E.left('foo')), E.left('foo'))
    assert.deepStrictEqual(M.ap(E.left('foo'), E.right(1)), E.left('foo'))
    assert.deepStrictEqual(M.ap(E.left('foo'), E.left('bar')), E.left('foobar'))
  })

  it('getValidationSemigroup', () => {
    const { concat } = _.getSemigroup(semigroupString, semigroupString)
    assert.deepStrictEqual(concat(E.right('a'), E.right('b')), E.right('ab'))
    assert.deepStrictEqual(concat(E.right('a'), E.left('b')), E.left('b'))
    assert.deepStrictEqual(concat(E.left('b'), E.right('a')), E.left('b'))
    assert.deepStrictEqual(concat(E.left('a'), E.left('b')), E.left('ab'))
  })

  it('getValidationAlt', () => {
    const A = _.getAlt(getArrayMonoid<number>())
    assert.deepStrictEqual(A.alt(E.left([1]), () => E.right('a')), E.right('a'))
    assert.deepStrictEqual(A.alt(E.right('a'), () => E.left([1])), E.right('a'))
    assert.deepStrictEqual(A.alt(E.left([1]), () => E.left([2])), E.left([1, 2]))
  })

  it('getValidationMonoid', () => {
    const M = _.getMonoid(monoidString, monoidSum)
    assert.deepStrictEqual(M.concat(E.right(1), E.right(2)), E.right(3))
    assert.deepStrictEqual(M.concat(E.right(1), E.left('foo')), E.left('foo'))
    assert.deepStrictEqual(M.concat(E.left('foo'), E.right(1)), E.left('foo'))
    assert.deepStrictEqual(M.concat(E.left('foo'), E.left('bar')), E.left('foobar'))
  })
})
