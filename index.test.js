import { myMerge } from './index'

test('merges two given things', () => {
  expect(myMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
})
