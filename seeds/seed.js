const seedCustomer = require('./customer-seeds')
const seedReservation = require('./reservation-seeds')
const seedOwner = require('./owner-seeds')
const seedMenu = require('./menu-seeds')
const seedDish = require('./dish-seeds')
const sequelize = require("../config/connection")


const seed = async ()=>{
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCustomer();
    console.log('\n----- DATABASE Customer SYNCED -----\n');

    await seedOwner();
    console.log('\n----- DATABASE Owner SYNCED -----\n');

    await seedReservation();
    console.log('\n----- DATABASE Reservation SYNCED -----\n');
    
    await seedMenu();
    console.log('\n----- DATABASE Menu SYNCED -----\n');


    await seedDish();
    console.log('\n----- DATABASE Dishes SYNCED -----\n');

    process.exit(0);
}

seed();