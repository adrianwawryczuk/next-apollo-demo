import { gql } from '@apollo/client'

export interface PersonsQueryVariables {
  page: number
  query: string
}

export const PERSONS_QUERY = gql`
  query Persons($page: Int!, $query: String!) {
    persons(page: $page, query: $query) {
      persons {
        id
        address
        name
        phoneNumber
      }
      count
    }
  }
`
