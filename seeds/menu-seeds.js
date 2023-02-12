// Saturday February 11 2023 @ 3:16pm -S.Basa

const {Menu} = require('../models');

const menuData = [
    {
        name: "applebees",
        OwnerId: 1
    }
];


const seedMenu = () => Menu.bulkCreate(menuData);

module.exports = seedMenu;