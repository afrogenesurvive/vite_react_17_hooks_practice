
const typeDefs = `
#graphql
  type Query {
    Hello: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

`;

module.exports = typeDefs;