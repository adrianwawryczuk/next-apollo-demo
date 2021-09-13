import { Person, Persons } from '../generated/graphql'
import { persons } from '../utils/personGenerator'

const PAGE_LIMIT = 20

export interface PersonsQueryVariables {
  page: number
  query: string
}

function getPageData(data: Person[], page: number) {
  return data.slice(0, PAGE_LIMIT * (page + 1))
}

const cachedFilterResults: Record<string, Person[]> = {}

const filterPersonByName = (query: string) => {
  return (person: Person): boolean => {
    return person.name.indexOf(query) === 0
  }
}
function getFilteredPersons(query: string): Person[] {
  const cachedResult = cachedFilterResults[query]
  if (cachedResult) {
    return cachedResult
  }

  if (query.length >= 3) {
    const filterResult = persons.filter(filterPersonByName(query))

    cachedFilterResults[query] = filterResult
    return filterResult
  }

  return persons
}

export function personsResolver(
  _: unknown,
  variables: PersonsQueryVariables
): Persons {
  const filteredPersons = getFilteredPersons(variables.query)

  return {
    persons: getPageData(filteredPersons, variables.page),
    count: filteredPersons.length,
  }
}
