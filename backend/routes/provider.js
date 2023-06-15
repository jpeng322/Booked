import express from "express";
import prisma from "../db/index.js";
import { cloudinary, storage } from "../utilities/cloudinary.js";
import multer from "multer";
import formData from "express-form-data";

export default function providerRouter(passport) {
  //Creates a new instance of a router
  const router = express.Router();
  const memStorage = multer.memoryStorage();
  const multerUpload = multer({ storage: memStorage }).array("profile");
  // const multerUpload = multer({ storage: memStorage }).single("profile");

  // Get all providers
  router.get("/", async (req, res) => {
    try {
      const providers = await prisma.provider.findMany({
      });

      if (providers) {
        res.status(200).json({
          success: true,
          providers,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Failed to fetch providers",
      });
    }
  });

  //Get onboarded providers
  router.get("/onboarded", async (req, res) => {
    try {
      const onboardedProviders = await prisma.provider.findMany({
        where: {
          onboarded: true
        },
        include: {
          image: true
        }
      });

      if (onboardedProviders) {
        res.status(200).json({
          success: true,
          onboardedProviders,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to fetch onboarded providers."
        })
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong.",
      });
    }
  });

  //Get providers from logged in user
  router.get(
    "/provider",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const providers = await prisma.provider.findMany({
          where: {
            provider_id: req.provider.provider_id,
          },
        });
        if (providers) {
          res.status(200).json({
            success: true,
            providers,
          });
        }
      } catch (e) {
        res.status(500).json({
          success: false,
          message: "Login is required for access",
        });
      }
    }
  );

  // Get a specific provider by ID
  router.get("/providers/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const provider = await prisma.provider.findUnique({
        where: {
          provider_id: parseInt(id),
        },
      });
      if (provider) {
        res.status(200).json({
          success: true,
          provider,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Provider not found",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Failed to fetch provider",
      });
    }
  });

  router.put(
    "/onboard",
    passport.authenticate("jwt", { session: false }),
    multerUpload,
    // multerUploadMultiple,
    async (req, res) => {
      console.log(req.body, req.file, req.files);
      try {
        // const file = req.file;
        const file = req.files[0];

        const b64 = Buffer.from(file.buffer).toString("base64");
        let dataURI = "data:" + file.mimetype + ";base64," + b64;

        const uploadedProfilePic = await cloudinary.uploader.upload(dataURI);

        const listOfServices = JSON.parse(req.body.listOfServices);

        const uploadedFilesPromises = req.files.slice(1).map(async (file) => {
          const b64 = Buffer.from(file.buffer).toString("base64");
          let dataURI = "data:" + file.mimetype + ";base64," + b64;
          return await cloudinary.uploader.upload(dataURI);
        });

        const uploadedFiles = await Promise.all(uploadedFilesPromises);

        const updatedProvider = await prisma.provider.update({
          where: {
            provider_id: req.user.Provider.provider_id,
          },
          data: {
            provider_response: req.body.responseTime,
            provider_payment_methods: req.body.paymentMethods,
            provider_standing: req.body.backgroundCertified,
            provider_amountOfEmployees: parseInt(req.body.amountOfEmployees),
            provider_yearsInBusiness: parseInt(req.body.yearsInBusiness),
            provider_businessName: req.body.businessName,
            provider_areaServed: req.body.areaServed,
            profile_pic: uploadedProfilePic.url,
            service: {
              createMany: {
                data: listOfServices.map((service) => {
                  return {
                    price: parseInt(service.price),
                    service_type: service.service,
                  };
                }),
              },
            },
            image: {
              createMany: {
                data: uploadedFiles.map(file => {
                  return {
                    image_url: file.url,
                  };
                }),
              },
            },
            onboarded: true,
          },
        });




        res.status(200).json({
          success: true,
          updatedProvider,
        });
      } catch (e) {
        console.log(e);
      }
    }
  );

  // Create a new provider
  router.post(
    "/providers",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const newProvider = await prisma.provider.create({
          data: {
            provider_fname: req.body.provider_fname,
            provider_lname: req.body.provider_lname,
            provider_phone: req.body.provider_phone,
            provider_email: req.body.provider_email,
            provider_password: req.body.provider_password,
            provider_id: req.provider.id,
          },
        });
        if (newProvider) {
          res.status(200).json({
            success: true,
            message: "Provider created successfully",
          });
        }
      } catch (e) {
        res.status(500).json({
          success: false,
          message: "Failed to create provider",
        });
      }
    }
  );

  // Update a provider by ID
  router.put(
    "/providers/:id",
    // passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const id = req.params.id;
      console.log(req.body, req.params.id);

      try {
        const provider = await prisma.provider.findUnique({
          where: {
            // id: parseInt(id),
            provider_id: parseInt(id),
          },
        });
        console.log(provider);

        if (provider) {
          const updateProvider = await prisma.provider.update({
            where: {
              provider_id: parseInt(id),
            },
            data: {
              provider_email: req.body.provider_email,
              provider_password: req.body.provider_password,
              provider_fname: req.body.provider_fname,
              provider_lname: req.body.provider_lname,
              provider_phone: req.body.provider_phone,
            },
          });

          if (updateProvider) {
            res.status(200).json({
              success: true,
              message: "Provider information updated successfully",
              updateProvider,
            });
          } else {
            res.status(500).json({
              success: false,
              message: "Failed to update provider",
            });
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Failed to update provider",
        });
      }
    }
  );

  // router.put('/preferred-services', passport.authenticate("jwt", { session: false }), async (request, response) => {
  //   console.log('THIS IS THE PROVIDER:', request.user.Provider)
  //   try {
  //     const providerPreferredServices = await prisma.provider.updateMany({
  //       where: {
  //         AND: [
  //             {provider_id: request.user.Provider.provider_id},
  //             {provider_email: request.user.Provider.provider_email},
  //         ],
  //       },

  //       data: {
  //         preferred_services: request.body.preferred_services,
  //       },

  //     });

  //     if(providerPreferredServices.count == 0){
  //       response.status(404).json({
  //         success: false,
  //         message: "Provider does not exist for this user"
  //       });
  //     }
  //     else {
  //       response.status(200).json({
  //         success: true,
  //         providerPreferredServices
  //       })
  //     }

  //   } catch (error) {
  //     response.status(500).json({
  //       success: false,
  //       message: 'failed to edit client'
  //     });
  //   }
  // });

  // Delete a provider by ID
  router.delete(
    "/providers/:id",
    passport.authenticate("jwt", { session: false }),

    async (req, res) => {
      try {
        const deleteProvider = await prisma.provider.delete({
          where: {
            provider_id: parseInt(id),
          },
        });
        if (deleteProvider) {
          res.status(200).json({
            success: true,
            message: "Provider deleted successfully",
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Failed to delete provider",
          });
        }
      } catch (e) {
        res.status(500).json({
          success: false,
          message: "Failed to delete provider",
        });
      }
    }
  );

  return router;
}
