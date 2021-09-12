import { gql } from '@apollo/client'

export const PERSONS_QUERY = gql`
  query Persons {
    persons {
      address
      name
      phoneNumber
    }
  }
`
