module.exports = {
    Query: {
        food_menus: async(parent, args, { models }) => {
            return await models.foodMenuModel.findAll();
        },
        food_menu: async(parent, { id }, { models }) => {
            return await models.foodMenuModel.findByPk(id);
        }
    },
    Mutation: {
        createFoodMenu: async(parent, { food_name, food_price, food_type }, { models }) => {
            return await models.foodMenuModel.create({
                food_name,
                food_price,
                food_type
            });
        },
        deleteFoodMenu: async(parent, { id }, { models }) => {
            return await models.foodMenuModel.destroy({ where: { id } });
        }
    }
}