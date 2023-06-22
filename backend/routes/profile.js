import express from "express";
import prisma from "../db/index.js";
import upload from "../middleware/multer.js";
import { cloudinary } from "../utilities/cloudinary.js";
// import  cloudinary  from "../utilities/cloudinary.js";
// import router from "./auth.js";


export default function profileRouter(passport) {
    const router = express.Router();

    //route to save profile pic from cloudinary and planetscale
    router.post("/pic", passport.authenticate('jwt', { session: false }),
        // upload.single('image'), 
        async (req, res) => {
            console.log(req.body.data);

            try {
                const uploadToCloudinary = await cloudinary.uploader.upload(req.body.data, {
                    transformation: [
                        { width: 1000, height: 1000, crop: 'scale' }
                    ]
                });

                const url = uploadToCloudinary.secure_url;
                const pictureID = uploadToCloudinary.public_id
          

                try {
                    const typeOFUser = req.body.type;

                    // console.log(req.user.Client)
                    if (typeOFUser === "provider") {

                        const providerProfilePic = await prisma.provider.update({
                            where: {
                                provider_id: req.user.Provider.provider_id
                                // AND: [
                                //     { provider_id: req.user.Provider.provider_id },
                                //     { provider_email: req.user.Provider.provider_email },
                                // ],

                            },
                            select: {
                                profile_pic: true,
                                profile_pic_id: true
                            },
                            data: {
                                profile_pic: url,
                                profile_pic_id: pictureID
                            },
                        });

                        if (providerProfilePic) {
                            res.status(200).json({
                                success: true,
                                providerProfilePic,
                            })
                        }
                        else {
                            res.status(500).json({
                                success: false,
                                message: 'could not save provider pic'
                            })
                        }
                    }

                    if (typeOFUser === "client") {

                        const clientProfilePic = await prisma.client.update({
                            where: {
                                client_id: req.user.Client.client_id

                            },
                            select: {
                                profile_pic: true,
                                profile_pic_id: true
                            },
                            data: {
                                profile_pic: url,
                                profile_pic_id: pictureID
                            },
                        });

                        if (clientProfilePic) {
                            res.status(200).json({
                                success: true,
                                clientProfilePic,
                            });
                        }
                        else {
                            res.status(500).json({
                                success: false,
                                message: 'could not save client pic'
                            });
                        }
                    }


                } catch (error) {
                    // console.log(error)
                    res.status(500).json({
                        success: false,
                        message: 'Failed to upload'
                    })
                }


            } catch (error) {
                // console.log(error);
                res.status(500).json({
                    success: false,
                    message: 'Failed to send'
                })
            }
        });



    //route to delete profile pic from cloudinary and planetscale
    router.put("/pic/remove", passport.authenticate('jwt', { session: false }), async (req, res) => {


        try {
            const typeOFUser = req.body.type;

            if (typeOFUser === "provider") {
                const findUser = await prisma.provider.findUnique({
                    where: {
                        provider_id: req.user.Provider.provider_id
                    }
                });

                console.log("this is the FIND USER", findUser)

                if (findUser) {
                    const pictureID = findUser.profile_pic_id
                    console.log("THIS IS THE PUBLIC PIC ID", pictureID)

                    const deleteFromCloudinary = await cloudinary.uploader.destroy(pictureID)

                    // res.status(200).json({
                    //     success: true,
                    //     message: 'found user',
                    //     findUser,
                    //     deleteFromCloudinary
                    // })
                }


                try {
                    const deleteProfilePic = await prisma.provider.update({
                        where: {
                            provider_id: req.user.Provider.provider_id
                        },
                        data: {
                            profile_pic: null,
                            profile_pic_id: null,
                        }
                    })

                    if (deleteProfilePic) {
                        res.status(200).json({
                            success: true,
                            message: 'Picture successfully deleted'
                        })
                    }

                } catch (error) {
                    console.log(error);
                    res.status(500).json({
                        success: false,
                        message: 'Failed to remove'
                    });
                }
            }


            if (typeOFUser === "client") {
                const findUser = await prisma.client.findUnique({
                    where: {
                        client_id: req.user.Client.client_id
                    }
                });

                console.log("this is the FIND USER", findUser)

                if (findUser) {
                    const pictureID = findUser.profile_pic_id
                    console.log("THIS IS THE PUBLIC PIC ID", pictureID)

                    const deleteFromCloudinary = await cloudinary.uploader.destroy(pictureID)

                }


                try {
                    const deleteProfilePic = await prisma.client.update({
                        where: {
                            client_id: req.user.Client.client_id
                        },
                        data: {
                            profile_pic: null,
                            profile_pic_id: null,
                        }
                    })

                    if (deleteProfilePic) {
                        res.status(200).json({
                            success: true,
                            message: 'Picture successfully deleted'
                        })
                    }

                } catch (error) {
                    console.log(error);
                    res.status(500).json({
                        success: false,
                        message: 'Failed to remove'
                    });
                }
            }




        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to find'
            })
        }



    });







    return router;
}

