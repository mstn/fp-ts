import * as assert from 'assert'
import * as _ from '../src/IO'
import { semigroupSum } from '../src/Semigroup'
import { monoidSum } from '../src/Monoid'

describe('IO', () => {
  it('ap', () => {
    const double = (n: number): number => n * 2
    const fab = _.of(double)
    const fa = _.of(1)
    assert.strictEqual(_.ap(fab, fa)(), 2)
  })

  it('chain', () => {
    const f = (n: number) => _.of(n * 2)
    assert.strictEqual(_.chain(_.of(1), f)(), 2)
  })

  it('getSemigroup', () => {
    const S = _.getSemigroup(semigroupSum)
    const log: Array<string> = []
    const append = (message: string): _.IO<number> => () => log.push(message)
    assert.strictEqual(S.concat(append('a'), append('b'))(), 3)
    assert.deepStrictEqual(log, ['a', 'b'])
  })

  it('getMonoid', () => {
    const M = _.getMonoid(monoidSum)
    const log: Array<string> = []
    const append = (message: string): _.IO<number> => () => log.push(message)
    assert.strictEqual(M.concat(append('a'), M.empty)(), 1)
    assert.strictEqual(M.concat(M.empty, append('b'))(), 2)
    assert.deepStrictEqual(log, ['a', 'b'])
  })

  it('fromIO', () => {
    const ma = _.of(1)
    assert.strictEqual(_.io.fromIO(ma), ma)
  })
})
