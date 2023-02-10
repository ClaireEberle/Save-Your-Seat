// Thurs Feb 9 2023 SB
// seed data

const sequelize = require("../config/connection")
const {Customer, Reservation, Owner} = require("../models")

const seed = async ()=>{
    await sequelize.sync({ force: true});
    const customer = await Customer.bulkCreate([
    {
        email: "test@gmail.com",
        phonenumber: 2065555555
    },
    ],{
        // documentation for hooks
        // https://sequelize.org/docs/v7/other-topics/hooks/
        individualHooks: true,
        validate: true
    });


    const reservation = await Reservation.bulkCreate([
        {
            time_slots: "7:00pm"
        },
        ],{
            individualHooks: true,
            validate: true
        });

    const owner = await Owner.bulkCreate([
        {
            table_number: 0
        },
        ],{
            individualHooks: true,
            validate: true
        });
        process.exit(1)
    }

seed();