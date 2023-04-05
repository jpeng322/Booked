import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.post("/signup", async (request, response) => {
  console.log(request.body);
  try {
    const foundProvider = await prisma.provider.findFirst({
      where: {
        provider_email: request.body.email,
      },
    });

    const foundClient = await prisma.client.findFirst({
      where: {
        client_email: request.body.email,
      },
    });

    console.log(foundProvider, "provider", foundClient, "client");
    if (foundProvider || foundClient) {
      response.status(400).json({
        success: false,
        message: "User already exists.",
      });
    } else {
      const newProvider = await prisma.provider.create({
        data: {
          provider_email: request.body.email,
          provider_password: request.body.password,
          provider_fname: request.body.fname,
          provider_lname: request.body.lname,
          provider_phone: request.body.phone,
        },
      });

      const newClient = await prisma.client.create({
        data: {
          client_email: request.body.email,
          client_password: request.body.password,
          client_fname: request.body.fname,
          client_lname: request.body.lname,
          client_phone: request.body.phone,
        },
      });
      response.status(201).json({
        success: true,
        message: "Account successfully created!",
        newProvider,
        newClient,
      });
    }
  } catch (e) {
    console.log(e);
    response.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

router.post("/login", async (request, response) => {
  try {
    const findProvider = await prisma.provider.findFirst({
      where: {
        provider_email: request.body.email,
      },
    });
    // const findClient = await prisma.client.findFirst({
    //   where: {
    //     client_email: request.body.client,
    //   },
    // });
    console.log(findProvider)
    if (findProvider) {
      console.log(request.body.password, findProvider.password);
      if (request.body.password === findProvider.provider_password) {
        response.status(200).json({
          success: "true",
          message: "User logged in!",
        });
      } else {
        response.status(400).json({
          success: false,
          message: "Incorrect email or password.",
        });
      }
    } else {
      response.status(400).json({
        success: false,
        message: "Incorrect email or password.",
      });
    }
  } catch (e) {
    response.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

export default router;
