module.exports = {
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
        createUser: async(parent, { username, password, email }, { models }) => {
            return await models.userModel.create({
                username,
                password,
                email
            });
        },
        deleteUser: async(parent, { id }, { models }) => {
            return await models.userModel.destroy({ where: { id } });
        }
    }
}