import Link from 'next/link'
import { initializeApollo } from '../service/apolloClient'
import { PERSONS_QUERY } from '../query/personsQuery'
import { GetServerSideProps } from 'next'
import { Persons } from '../query/types/Persons'
import { FC } from 'react'

interface NamesPageProps {
  persons: Persons['persons']
}
const PeoplesPage: FC<NamesPageProps> = (props) => {
  console.log(props)

  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
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
