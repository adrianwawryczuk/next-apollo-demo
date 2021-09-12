import Link from 'next/link'
import { initializeApollo } from '../service/apolloClient'
import { Name } from '../components/Name'
import { HELLO_WORLD_QUERY } from '../query/helloWorld'
import { HelloWorld } from '../query/types/HelloWorld'
import { GetServerSideProps } from 'next'

const Page = (props: HelloWorld) => (
  <div>
    Welcome, <Name loading={false} name={props.helloWorld} />
    <br />
    <br />
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export const getServerSideProps: GetServerSideProps<HelloWorld> = async () => {
  const client = initializeApollo()

  const { data } = await client.query<HelloWorld>({
    query: HELLO_WORLD_QUERY,
  })

  return {
    props: data,
  }
}

export default Page
