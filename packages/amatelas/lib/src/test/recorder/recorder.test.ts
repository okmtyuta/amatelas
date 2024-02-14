import { expect, expectTypeOf, test, describe } from 'vitest'
import { Recorder } from '../../recorder'

describe('Hex class', () => {
  test('init', () => {
    const sources = ['red', 'green', 'blue']
    const keyProcessor = (source: (typeof sources)[number]) => `key-${source}`
    const valueProcessor = (source: (typeof sources)[number]) => source.length

    const recorder = new Recorder(sources, keyProcessor, valueProcessor)

    expect(recorder.record).toEqual({
      'key-red': 3,
      'key-green': 5,
      'key-blue': 4
    })
    expectTypeOf(recorder.record).toEqualTypeOf<
      Record<(typeof sources)[number], number>
    >()
  })
})
