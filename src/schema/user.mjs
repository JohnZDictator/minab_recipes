import { gql } from 'apollo-server-express';

export default gql `
    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
    }

    extend type Query {
        users: [User!]
        user(id: ID!): User
    }
    
    extend type Mutation {
        createUser(username: String!, password: String!, email: String!): User
        deleteUser(id: ID!): Boolean 
    }
`;