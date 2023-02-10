// Thurs Feb 9 2023 SB
// seed data
const seedCustomer = require('./customer-seeds')
const seedReservation = require('./reservation-seeds')
const sequelize = require("../config/connection")
// const {Customer,Reseravation, Owner} = require("../models")

const seed = async ()=>{
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCustomer();
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedReservation();
    console.log('\n----- DATABASE SYNCED -----\n');

    // const customer = await Customer.bulkCreate([
    // {
    //     email: "test@gmail.com",
    //     password: "joejoejoe"
    // },
    // ],{
    //     // documentation for hooks
    //     // https://sequelize.org/docs/v7/other-topics/hooks/
    //     individualHooks: true,
    //     validate: true
    // });


    // const reservation = await Reservation.bulkCreate([
        // {
        //     time_slots: "dinner",
        //     day: "friday",
        //     customer_id: 1
        // },
    //     ])
        // {
        //     // individualHooks: true,
        //     // validate: true
        // });

    // const owner = await Owner.bulkCreate([
    //     {
    //         table_number: 0
    //     },
    //     ],{
    //         individualHooks: true,
    //         validate: true
    //     });
        process.exit(0);
    };

seed();