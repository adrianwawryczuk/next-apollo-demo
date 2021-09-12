import { personsResolver } from './resolver/personsResolver'

const resolverMap = {
  Query: {
    persons: personsResolver,
  },
}
export default resolverMap
