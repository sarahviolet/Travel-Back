/*
Created By: Sarah Yun
Modified By: Sarah Yun, Nov/30/2023
*/

import { Router } from "express";
import Booking from './booking.model.js';
import { CreateBooking, DeleteBooking, GetBookings, UpdateBooking } from "./booking.controller.js";



const router = Router();

router.post('/api/bookings', CreateBooking);

router.put('/api/bookings/:id',  UpdateBooking);

router.get('/api/bookings', GetBookings);
router.delete('/api/bookings/:id', DeleteBooking);

export default router;