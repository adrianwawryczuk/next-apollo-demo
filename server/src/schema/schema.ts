import { GraphQLSchema } from 'graphql'
import 'graphql-import-node'
import * as typeDefs from './schema.graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from '../resolversMap'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
export default schema
