import express from "express";
import prisma from "../db/index.js";

export default function serviceRouter(passport) {
  const router = express.Router();

  //GET all services
  router.get("/", async (_request, response) => {
    try {
      const allService = await prisma.service.findMany();

      if (allService) {
        response.status(200).json({
          success: true,
          services: allService,
        });
      } else {
        response.status(404).json({
          success: false,
          message: "services does not exist",
        });
      }
    } catch (error) {
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  });

  //GET all bookings based on service type
  router.get("/booking", async (request, response) => {
    try {
      const services = await prisma.service.findMany({
        where: {
          service_type: request.body.service_type,
        },
        include: {
          booking: true,
        },
      });

      if (services) {
        response.status(200).json({
          success: true,
          services,
        });
      }
    } catch (error) {
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  });

  //POST new service
  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (request, response) => {
      console.log(request.body);
      try {
        const newService = await prisma.service.create({
          data: {
            service_type: request.body.service_type,
            payment_id: request.body.payment_id,
            booking_id: request.body.booking_id,
            provider_id: request.body.provider_id,
            booking_date: request.body.booking_date,
            payment_fee: request.body.payment,
          },
        });

        if (newService) {
          response.status(201).json({
            success: true,
            message: "service has been created",
          });
        } else {
          response.status(500).json({
            success: false,
            message: "failed to create service",
          });
        }
      } catch (error) {
        console.log(error);
        response.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }
  );

  //PUT existing service by id
  router.put(
    "/:serviceId",
    passport.authenticate("jwt", { session: false }),
    async (request, response) => {
      try {
        const serviceId = parseInt(request.params.serviceId);

        const findByServiceId = await prisma.service.update({
          where: {
            service_id: serviceId,
          },
          data: {
            service_type: request.body.service_type,
            payment_id: request.body.payment_id,
            booking_id: request.body.booking_id,
            provider_id: request.body.provider_id,
            booking_date: request.body.booking_date,
          },
        });

        if (findByServiceId) {
          response.status(201).json({
            success: true,
            message: "service has been updated",
          });
        } else {
          response.status(500).json({
            success: false,
            message: "failed to update service",
          });
        }
      } catch (error) {
        response.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }
  );

  //DELETE service by id
  router.delete(
    "/:serviceId",
    passport.authenticate("jwt", { session: false }),
    async (request, response) => {
      try {
        const serviceId = parseInt(request.params.serviceId);

        const findByServiceId = await prisma.service.delete({
          where: {
            service_id: serviceId,
          },
        });

        if (findByServiceId) {
          response.status(201).json({
            success: true,
            message: "service has been deleted",
          });
        } else {
          response.status(500).json({
            success: false,
            message: "failed to delete service",
          });
        }
      } catch (error) {
        response.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    }
  );
  return router;
}
