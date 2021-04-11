import { gql } from 'apollo-server-express';

import userSchema from './user.mjs';
import foodMenuSchema from './food_menu.mjs';

const linkSchema = gql `
    type Query{
        _: Boolean
    }

    type Mutation{
        _: Boolean
    }

    type Subscription{
        _: Boolean
    }
`;

export default [linkSchema, userSchema, foodMenuSchema]