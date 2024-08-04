const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services');
const { errorResponse, successResponse} = require('../utils/common');

async function createBooking(req, res) {
    try {
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        });
        successResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch(error) {
        errorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(errorResponse);
    }
}

module.exports = {
    createBooking
}