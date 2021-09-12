import { Person } from '../generated/graphql'
import { persons } from '../utils/personGenerator'

export function personsResolver(): Person[] {
  return persons
}
