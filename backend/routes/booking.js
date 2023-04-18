import express from "express";
import prisma from "../db/index.js";

export default function bookingRouter(passport) {
  const router = express.Router();

  //Get all bookings
  router.get("/", async (request, response) => {
    try {
      const allBookings = await prisma.booking.findMany({});

      if (allBookings) {
        response.status(200).json({
          success: true,
          bookings: allBookings,
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Bookings not found.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({
        message: "Something went wrong.",
      });
    }
  });

  //Get provider bookings
  router.get("/provider/:userId", async (request, response) => {
    try {
      const providerBooking = await prisma.booking.findMany({
        where: {
          provider_id: parseInt(request.params.userId),
        },
      });

      if (providerBooking) {
        response.status(200).json({
          success: true,
          bookings: providerBooking,
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Provider bookings not found.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({
        message: "Something went wrong.",
      });
    }
  });

  //Get all client bookings
  router.get("/client/:userId", async (request, response) => {
    try {
      const clientBooking = await prisma.booking.findMany({
        where: {
          client_id: parseInt(request.params.userId),
        },
      });

      if (clientBooking) {
        response.status(200).json({
          success: true,
          bookings: clientBooking,
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Client bookings not found.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({
        message: "Something went wrong.",
      });
    }
  });

  //Create a booking
  router.post("/", async (request, response) => {
    try {
      const createBooking = await prisma.booking.create({
        data: {
          client_id: request.body.client_id || 1,
          provider_id: request.body.provider_id || 1,
          service_id: request.body.service_id || 1,
          transaction_id: request.body.service || "To be determined",
          //   booking_date: cre,
        },
      });

      if (createBooking) {
        response.status(201).json({
          success: true,
          booking_info: createBooking,
          message: "Successfully booked!",
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Booking could not be created.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({
        message: "Something went wrong",
      });
    }
  });

  //Delete specific booking
  router.delete("/:bookingId", async (request, response) => {
    try {
      const deleteBooking = await prisma.booking.delete({
        where: {
          booking_id: parseInt(request.params.bookingId),
        },
      });

      if (deleteBooking) {
        response.status(200).json({
          success: true,
          booking_info: deleteBooking,
          message: "Successfully deleted!",
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Booking could not be deleted.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({
        message: "Something went wrong",
      });
    }
  });

  //Will make update route after having bookTime schema discussed
    
  return router;
}
