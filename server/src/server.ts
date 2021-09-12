import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import schema from './schema/schema'
import depthLimit from 'graphql-depth-limit'
import compression from 'compression'
import * as http from 'http'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'

async function startServer() {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  app.use(compression())

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

startServer()
