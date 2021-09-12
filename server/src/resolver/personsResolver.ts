import { Persons } from '../generated/graphql'
import { persons } from '../utils/personGenerator'

const PAGE_LIMIT = 20

export function personsResolver(
  _: unknown,
  variables: { page: number }
): Persons {
  return {
    persons: persons.slice(
      PAGE_LIMIT * variables.page,
      PAGE_LIMIT * (variables.page + 1)
    ),
    count: persons.length,
  }
}
