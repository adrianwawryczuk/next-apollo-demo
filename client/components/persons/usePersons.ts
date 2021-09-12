import { useCallback, useEffect, useState } from 'react'
import { Persons, Persons_persons_persons } from '../../query/types/Persons'
import { useQuery } from '@apollo/client'
import { PERSONS_QUERY } from '../../query/personsQuery'

interface InitialState {
  persons: Persons_persons_persons[]
  count: number
}

const PAGE_LIMIT = 20

export const usePersons = (initialState: InitialState) => {
  const [page, setPage] = useState(0)
  const pagesCount = Math.ceil(initialState.count / PAGE_LIMIT)
  const [peoples, setPeoples] = useState<
    Record<string, Persons_persons_persons[]>
  >({
    0: initialState.persons,
  })

  const canLoadMore = page + 1 <= pagesCount

  const handleLoadMore = useCallback(() => {
    setPage(page + 1)
  }, [page])

  const { data } = useQuery<Persons, { page: number }>(PERSONS_QUERY, {
    variables: { page },
  })

  useEffect(() => {
    if (peoples[page]?.length) {
      return
    }

    setPeoples((state) => ({
      ...state,
      [page]: data?.persons?.persons ?? [],
    }))
  }, [data, page])

  const accumulatedPersons = Object.values(peoples).reduce(
    (acc, persons) => [...acc, ...persons],
    [] as Persons_persons_persons[]
  )

  return [accumulatedPersons, handleLoadMore, canLoadMore] as const
}
