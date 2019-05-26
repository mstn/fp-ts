import * as assert from 'assert'
import { head } from '../src/Array'
import { some, isSome, map$ } from '../src/Option'
import { spy, trace } from '../src/Trace'
import { pipeOp } from '../src/function'

describe('Trace', () => {
  it('spy', () => {
    // tslint:disable-next-line:no-console
    const log_ = console.log
    const logger: Array<any> = []
    // tslint:disable-next-line:no-console
    console.log = (a: any) => {
      logger.push(a)
    }
    pipeOp(head(['a', 'bb', 'ccc']), spy, map$(spy), map$(s => s.length))
    assert.deepStrictEqual(logger, [some('a'), 'a'])
    // tslint:disable-next-line:no-console
    console.log = log_
  })

  it('trace', () => {
    // tslint:disable-next-line:no-console
    const log_ = console.log
    const logger: Array<any> = []
    // tslint:disable-next-line:no-console
    console.log = (a: any) => {
      logger.push(a)
    }
    pipeOp(
      head(['a', 'bb', 'ccc']),
      trace(h => `The head is a some? ${isSome(h)}`),
      map$(trace(s => `The value before calling .length is: ${s}`)),
      map$(s => s.length)
    )
    assert.deepStrictEqual(logger, ['The head is a some? true', 'The value before calling .length is: a'])
    // tslint:disable-next-line:no-console
    console.log = log_
  })
})
