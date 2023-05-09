import express from "express";
import prisma from "../db/index.js";

export default function providerRouter(passport) {
  //Creates a new instance of a router
  const router = express.Router();

  // Get all providers
  router.get("/", async (req, res) => {
    try {
      const providers = await prisma.provider.findMany({
        where: {
          provider_id: req.provider.provider_id,
        },
        //choosing the fields wish to get back from the table
        select: {
          provider_id: true,
          provider_fname: true,
          provider_lname: true,
          provider_phone: true,
          provider_email: true,
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
        message: "Failed to fetch providers",
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
    const id = req.params;

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
      res.status(500).json({
        success: false,
        message: "Failed to fetch provider",
      });
    }
  });

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
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const id = req.params.provider_id;

      try {
        const provider = await prisma.pet.findUnique({
          where: {
            id: parseInt(id),
            provider_id: req.provider.provider_id,
          },
        });

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
            });
          } else {
            res.status(500).json({
              success: false,
              message: "Failed to update provider",
            });
          }
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update provider",
        });
      }
    }
  );

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
