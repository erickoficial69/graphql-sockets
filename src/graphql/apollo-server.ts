import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './schema/typeDefs'
import {resolvers} from './schema/resolvers'
import {app} from '../app'

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({app})

export {server}
