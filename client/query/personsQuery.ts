import { gql } from '@apollo/client'

export const PERSONS_QUERY = gql`
  query Persons($page: Int!) {
    persons(page: $page) {
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
