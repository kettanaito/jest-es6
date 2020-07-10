import { merge } from 'ramda'

export function myMerge(a, b) {
  return merge(a, b)
}

export function withFetch() {
  return fetch('https://httpbin.org/get')
}
