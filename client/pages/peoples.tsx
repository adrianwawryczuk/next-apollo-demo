import { initializeApollo } from '../service/apolloClient'
import { PERSONS_QUERY } from '../query/personsQuery'
import { GetServerSideProps } from 'next'
import { Persons, Persons_persons_persons } from '../query/types/Persons'
import { FC } from 'react'
import { PersonCard } from '../components/persons/PersonCard'
import styles from './PeoplesPage.module.css'
import { usePersons } from '../components/persons/usePersons'

interface NamesPageProps {
  persons: Persons_persons_persons[]
  count: number
}

const PeoplesPage: FC<NamesPageProps> = (props) => {
  const [accumulatedPersons, handleLoadMore, canLoadMore] = usePersons(props)

  return (
    <>
      <div className={styles.peoplesContainer}>
        {accumulatedPersons.map((person) => (
          <PersonCard {...person} key={person.id} />
        ))}
      </div>

      {canLoadMore && <button onClick={handleLoadMore}>Load more</button>}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<NamesPageProps> =
  async () => {
    const client = initializeApollo()

    const { data } = await client.query<Persons, { page: number }>({
      query: PERSONS_QUERY,
      variables: {
        page: 0,
      },
    })

    return {
      props: {
        persons: data.persons?.persons ?? [],
        count: data.persons?.count ?? 0,
      },
    }
  }

export default PeoplesPage
