import utils from '../utils/utils.js';
import { AuthenticationError, UserInputError } from 'apollo-server';

export default {
    Query: {
        users: async(parent, args, { models }) => {
            return await models.userModel.findAll();
        },
        user: async(parent, { id }, { models }) => {
            return await models.userModel.findByPk(id);
        },
        // me: async(parent, args, { models, me }) => {
        //     return await models.User.findByPk(me.id);
        // }
    },
    Mutation: {
        signUp: async(parent, { username, password, email }, { models }) => {
            const saltHash = utils.genPassword(password);

            const salt = saltHash.salt;
            const hash = saltHash.hash;

            const user = await models.userModel.create({
                username,
                hash,
                salt,
                email
            });

            return { token: utils.issueJWT(user) };
        },
        signIn: async(parent, { username, password }, { models }) => {
            return await models.userModel.findOne({ where: { username: username } })
                .then((user) => {
                    if (!user) {
                        throw new UserInputError('No user found with this login credentials.');
                    }

                    const isValid = utils.validPassword(password, user.hash, user.salt);

                    if (isValid) {
                        const tokenObject = utils.issueJWT(user);
                        console.log(tokenObject);
                        return { token: tokenObject };
                    } else {
                        throw new AuthenticationError('Invalid password.');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteUser: async(parent, { id }, { models }) => {
            return await models.userModel.destroy({ where: { id } });
        }
    }
}