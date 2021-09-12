export const arrayOf = function <T>(times: number, generator: () => T) {
  const result = []

  for (let i = 0; i < times; ++i) {
    result.push(generator())
  }

  return result
}
