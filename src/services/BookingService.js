const {StatusCodes} = require('http-status-codes')
const {BookingRepository} = require('../respositories'); 
const { AppError } = require('../utils/error/index');
const axios  = require('axios')
const db = require('../models');
const {ServerConfig} = require('../config/')

const bookingRepository = new BookingRepository();

async function createBooking(data) {

    return new Promise((resolve, reject) =>{
        const result = db.sequelize.transaction(
            async function  bookingImp(t) {
            const flight = await axios.get( `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
            const flightData = flight.data.data;
            if(data.noOfSeats > flightData.totalSeats){
                reject( new AppError('Not Enough Seats available', StatusCodes.BAD_REQUEST))
            }
            resolve(true)
        })
    })
}

module.exports = {
    createBooking,
}