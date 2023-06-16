import express from "express";
import prisma from "../db/index.js";

export default function serviceImageRouter(passport) {
  const router = express.Router();

  //GET all services
  router.get("/", async (request, response) => {
    try {
      const allServiceImages = await prisma.image.findMany();

      if (allServiceImages) {
        response.status(200).json({
          success: true,
          serviceImages: allServiceImages,
        });
      } else {
        response.status(404).json({
          success: false,
          message: "services image does not exist",
        });
      }
    } catch (error) {
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  });

  router.post(
    "/",
    // passport.authenticate("jwt", { session: false }),
    async (request, response) => {
      console.log(request.body);
      try {
        const newServiceImage = await prisma.image.create({
          data: {
            image_url: request.body.image_url,
            // provider_id: request.body.provider_id,
          },
        });

        if (newServiceImage) {
          response.status(201).json({
            success: true,
            message: "service image has been created",
          });
        } else {
          response.status(500).json({
            success: false,
            message: "failed to create service image",
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

  return router;
}
