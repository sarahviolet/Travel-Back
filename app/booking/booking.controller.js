import Booking from './booking.model.js';

export async function CreateBooking(req, res){

  
        const {isReturn, departureDate, arrivalDate, counts} = req.body;

        const bookingDoc = await Booking.create({
        isReturn,
        departureDate,
        arrivalDate,
        counts
        });
        res.json(bookingDoc);

}

export async function UpdateBooking(req, res){

    Booking.updateOne({ _id: req.params.id }, req.body)
    .then((err, result) => {
        return res.status(200).send({
            result
        })
    })
    .catch(err => {
        console.error(err);
    });

}

export async function GetBookings(req, res){

    const query = Booking.find().lean();
    const result = await query.exec();

    return res.status(200).send(result);

}

export async function DeleteBooking(req, res){

    const query = Booking.deleteOne({_id: req.params.id}).lean();
    const result = await query.exec();

    return res.status(200).send(result);

}