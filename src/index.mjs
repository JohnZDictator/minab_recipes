import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import models from './models/index.js';
import resolvers from './resolvers/index.mjs';
import schema from './schema/index.mjs';

import sequelize from './config/database.js';


const app = express();

app.use(cors());
app.use(express.json());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
    },
});

server.applyMiddleware({ app, path: '/graphql' });

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async() => {
    if (eraseDatabaseOnSync) {
        createFoodMenus();
    }
    app.listen({ port: 8000 }, () => {
        console.log('Apollo Server on http://localhost:8000/graphql');
    });
});

const createFoodMenus = async() => {
    await models.foodMenuModel.create({
        food_name: "Shiro Wet",
        food_price: 30,
        food_type: "Ethiopian Cultural"
    }, );
    await models.foodMenuModel.create({
        food_name: "Doro Wet",
        food_price: 100,
        food_type: "Ethiopian Cultural"
    }, );
};