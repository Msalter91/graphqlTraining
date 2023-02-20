import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
type Query {
    greeting: String
}
`

// Query is like defining a class 
// Definitions for types are the name, colon, the value type (e.g. string)
// Using gql in the way above allows us to parse the string into the GraphQL object 

 const resolvers = {
    Query: {
        greeting: () => 'Hello World'
    }
 }

const server = new ApolloServer({ typeDefs, resolvers })
const serverInfo = await server.listen({ port:9000 })
console.log(`server running at ${serverInfo.url}`)