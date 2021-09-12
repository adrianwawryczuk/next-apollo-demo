import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../service/apolloClient'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
