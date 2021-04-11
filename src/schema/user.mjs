import { gql } from 'apollo-server-express';

export default gql `
    scalar JSON

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
    }

    type Token {
        token: JSON!
    }

    extend type Query {
        users: [User!]
        user(id: ID!): User
    }
    
    extend type Mutation {
        signUp(username: String!, password: String!, email: String!): Token!
        signIn(username: String!, password: String!): Token!
        deleteUser(id: ID!): Boolean 
    }
`;