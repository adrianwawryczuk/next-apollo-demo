import { gql } from '@apollo/client'

export const HELLO_WORLD_QUERY = gql`
  query HelloWorld {
    helloWorld
  }
`
