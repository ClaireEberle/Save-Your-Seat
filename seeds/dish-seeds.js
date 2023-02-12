// Saturday February 11 2023 @ 3:16pm -S.Basa

const {Dish} = require('../models');

const dishData = [
    {
        dishes: "apples",
        side: "caramel",
        MenuId: 1
    },
    {
        dishes: "pears",
        side: "honey",
        MenuId: 1
    },
    {
        dishes: "oranges",
        side: "basil",
        MenuId: 1
    },
    {
        dishes: "mangos",
        side: "cilantro",
        MenuId: 1
    },
    {
        dishes: "bananas",
        side: "ice cream",
        MenuId: 1
    },
    {
        dishes: "kiwi",
        side: "water",
        MenuId: 1
    }


];


const seedDish = () => Dish.bulkCreate(dishData);

module.exports = seedDish;