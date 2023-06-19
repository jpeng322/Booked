import express from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import prisma from "../db/index.js";

const router = express.Router();

router.post("/signup/provider", async (request, response) => {
  console.log(request.body);
  try {
    const foundProvider = await prisma.provider.findFirst({
      where: {
        provider_email: request.body.email,
      },
    });

    if (foundProvider) {
      response.status(400).json({
        success: false,
        message: "User already exists.",
      });
    } else {
      const pHashedPassword = await argon2.hash(request.body.password);
      const newProvider = await prisma.provider.create({
        data: {
          provider_email: request.body.email,
          provider_password: pHashedPassword,
          // provider_fname: request.body.fname,
          // provider_lname: request.body.lname,
          provider_phone: request.body.phone,
          provider_location: request.body.location,
          provider_services: request.body.services,
        },
      });
      response.status(201).json({
        success: true,
        message: "Provider account successfully created!",
        newProvider,
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




router.post("/signup/client", async (request, response) => {
  // console.log(request.body);
  try {
    const foundClient = await prisma.client.findFirst({
      where: {
        client_email: request.body.email,
      },
    });
    if (foundClient) {
      response.status(400).json({
        success: false,
        message: "User already exists.",
      });
    } else {
      const cHashedPassword = await argon2.hash(request.body.password);
      const newClient = await prisma.client.create({
        data: {
          client_email: request.body.email,
          client_password: cHashedPassword,
          client_fname: request.body.fname,
          client_lname: request.body.lname,
          client_phone: request.body.phone,
          preferred_services: request.body.services, 
          client_zipcode: request.body.zipcode
        },
      });
      response.status(201).json({
        success: true,
        message: "Client account successfully created!",
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

// router.post("/login/provider", async (request, response) => {
//   try {
//     const findProvider = await prisma.provider.findFirst({
//       where: {
//         provider_email: request.body.email,
//       },
//     });
//     // const findClient = await prisma.client.findFirst({
//     //   where: {
//     //     client_email: request.body.client,
//     //   },
//     // });
//     console.log(findProvider);
//     try {
//       const verifiedPassword = await argon2.verify(
//         findProvider.provider_password,
//         request.body.password
//       );

//       if (verifiedPassword) {
//         const token = jwt.sign(
//           {
//             Provider: {
//               provider_email: findProvider.provider_email,
//               provider_id: findProvider.provider_id,
//             },
//           },
//           "showMeTheProvidersOrClients"
//         );


//         response.status(200).json({
//           success: true,
//           token,
//           type: "provider",
//           findProvider
//         });
//       } else {
//         response.status(401).json({
//           success: false,
//           message: "Incorrect email or password.",
//         });
//       }
//     } catch (e) {
//       response.status(500).json({
//         success: false,
//         message: "Something went wrong",
//       });
//     }
//   } catch (e) {
//     response.status(401).json({
//       success: false,
//       message: "Incorrect email or password",
//     });
//   }
// });

router.post("/login/client", async (request, response) => {
  try {
    const findClient = await prisma.client.findFirst({
      where: {
        client_email: request.body.email,
      },
    });

    try {
      const verifiedPassword = await argon2.verify(
        findClient.client_password,
        request.body.password
      );

      if (verifiedPassword) {
        const token = jwt.sign(
          {
            Client: {
              client_email: findClient.client_email,
              client_id: findClient.client_id,
            },
          },
          "showMeTheProvidersOrClients"
        );

        response.status(200).json({
          success: true,
          token,
          type: "client",
          findClient
        });
      } else {
        response.status(401).json({
          success: false,
          message: "Incorrect email or password.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    response.status(401).json({
      success: false,
      message: "Incorrect email or password",
    });
  }
});


router.post("/login/provider", async (request, response) => {
  console.log(request.body)
  try {
    const findProvider = await prisma.provider.findFirst({
      where: {
        provider_email: request.body.email,
      },
    });

    try {
      const verifiedPassword = await argon2.verify(
        findProvider.provider_password,
        request.body.password
      );

      if (verifiedPassword) {
        const token = jwt.sign(
          {
            Provider: {
              provider_email: findProvider.provider_email,
              provider_id: findProvider.provider_id,
            },
          },
          "showMeTheProvidersOrClients"
        );

        response.status(200).json({
          success: true,
          token,
          findProvider,
          type: "provider",
        });
      } else {
        response.status(401).json({
          success: false,
          message: "Incorrect email or password.",
        });
      }
    } catch (e) {
      console.log(e);
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    response.status(401).json({
      success: false,
      message: "Incorrect email or password",
    });
  }
});

router.delete("/delete", async (request, response) => {
  console.log(request.body.userId);
  try {
    const deleteUserBookings = await prisma.booking.deleteMany({
      where: {
        provider_id: request.body.userId,
      },
    });
    const findDeleteUser = await prisma.provider.delete({
      where: {
        provider_id: request.body.userId,
      },
    });

    console.log(findDeleteUser, deleteUserBookings);

    if (findDeleteUser) {
      response.status(200).json({
        message: "User deleted!",
        findDeleteUser,
      });
    } else {
      response.status(404).json({
        message: "User not found.",
      });
    }
  } catch (e) {
    console.log(e);
    response.status(401).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;
