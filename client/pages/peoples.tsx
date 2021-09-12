import { initializeApollo } from '../service/apolloClient'
import { PERSONS_QUERY } from '../query/personsQuery'
import { GetServerSideProps } from 'next'
import { Persons } from '../query/types/Persons'
import { FC } from 'react'
import { PersonCard } from '../components/PersonCard'
import styles from './PeoplesPage.module.css'

interface NamesPageProps {
  persons: Persons['persons']
}
const PeoplesPage: FC<NamesPageProps> = (props) => {
  return (
    <div className={styles.peoplesContainer}>
      {props.persons.map((person) => (
        <PersonCard {...person} key={person.id} />
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<NamesPageProps> =
  async () => {
    const client = initializeApollo()

    const { data } = await client.query<Persons>({
      query: PERSONS_QUERY,
    })

    return {
      props: {
        persons: data.persons,
      },
    }
  }

export default PeoplesPage
