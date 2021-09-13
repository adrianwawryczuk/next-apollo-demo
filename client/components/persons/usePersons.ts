import { useCallback, useEffect, useState } from 'react'
import { Persons, Persons_persons_persons } from '../../query/types/Persons'
import { useQuery } from '@apollo/client'
import { PERSONS_QUERY, PersonsQueryVariables } from '../../query/personsQuery'

interface InitialState {
  persons: Persons_persons_persons[]
  count: number
}

const PAGE_LIMIT = 20

export const usePersons = (initialState: InitialState, query: string) => {
  const [page, setPage] = useState(0)

  const handleLoadMore = useCallback(() => {
    setPage(page + 1)
  }, [page])

  const { data, loading, previousData } = useQuery<
    Persons,
    PersonsQueryVariables
  >(PERSONS_QUERY, {
    variables: { page, query },
  })

  useEffect(() => {
    setPage(0)
  }, [query])

  const persons = loading
    ? previousData?.persons?.persons ?? initialState.persons
    : data?.persons?.persons ?? initialState.persons

  const pagesCount = Math.ceil(
    (data?.persons?.count ?? initialState.count) / PAGE_LIMIT
  )

  const canLoadMore = page + 1 < pagesCount

  return [persons, handleLoadMore, canLoadMore] as const
}
