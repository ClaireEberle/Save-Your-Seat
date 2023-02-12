// Saturday February 11 2023 @ 3:16pm -S.Basa

const {Dish} = require('../models');

const dishData = [
    {
        dishes: "apples",
        side: "caramel"
    },
    {
        dishes: "pears",
        side: "honey"
    },
    {
        dishes: "oranges",
        side: "basil"
    },
    {
        dishes: "mangos",
        side: "cilantro"
    },
    {
        dishes: "bananas",
        side: "ice cream"
    },
    {
        dishes: "kiwi",
        side: "water"
    }
];

const seedDish = () => Dish.bulkCreate(dishData);

module.exports = seedDish;