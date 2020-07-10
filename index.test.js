import { myMerge, withFetch } from './index'

test('merges two given things', () => {
  expect(myMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
})

test('handles fetch in Jest as well', async () => {
  const res = await withFetch()
  const body = await res.json()

  expect(body).toHaveProperty('url', 'https://httpbin.org/get')
})
