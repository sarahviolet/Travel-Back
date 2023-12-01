/*
Created By: Sarah Yun
Modified By: Sarah Yun, Nov/30/2023
*/

import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const BookingSchema = new Schema({
  isReturn: Boolean,
  departureDate: String,
  arrivalDate: String,
  counts: Number,
//   tripType: {
//     type: Object,
//     default: null
//   },
  // author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: true,
});

const Booking = model('Booking', BookingSchema);

export default Booking;