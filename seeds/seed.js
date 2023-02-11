const seedCustomer = require('./customer-seeds')
const seedReservation = require('./reservation-seeds')
const seedOwner = require('./owner-seeds')
const sequelize = require("../config/connection")


const seed = async ()=>{
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCustomer();
    console.log('\n----- DATABASE Customer SYNCED -----\n');

    await seedReservation();
    console.log('\n----- DATABASE Reservation SYNCED -----\n');
    // process.exit(0);

    await seedOwner();
    console.log('\n----- DATABASE Owner SYNCED -----\n');
    process.exit(0);
}

seed();