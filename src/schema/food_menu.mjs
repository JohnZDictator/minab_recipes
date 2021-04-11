import { gql } from 'apollo-server-express';

export default gql `
    type FoodMenu {
        id: ID!
        food_name: String!
        food_price: Int!
        food_type: String!
    }

    extend type Query {
        food_menus: [FoodMenu!]
        food_menu(id: ID!): FoodMenu         
    }

    extend type Mutation {
        createFoodMenu(food_name: String!, food_price: Int!, food_type: String!): FoodMenu
        deleteFoodMenu(id: ID!): Boolean 
    }
`;