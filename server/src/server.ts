import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import schema from './schema/schema'
import depthLimit from 'graphql-depth-limit'
import compression from 'compression'
import * as http from 'http'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import cors from 'cors'

async function startServer() {
  const app = express()
  const httpServer = http.createServer(app)

  app.use(cors())

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  app.use(compression())

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  const port = process.env['PORT'] || 4000
  httpServer.listen({ port }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  })
}

startServer()
