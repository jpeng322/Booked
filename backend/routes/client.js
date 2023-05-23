import express from "express";
import prisma from "../db/index.js";


export default function clientRouter(passport){

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const client = await prisma.client.findMany({
        where: {
            client_id: req.client.client_id
        },
       
        select: {
            client_id: true,
            client_fname: true,
            client_lname: true,
            client_phone: true,
            client_email: true
        },
    });
    
    if(clients) {
        res.status(200).json({
            success: true,
            client
        })
    };

  } catch (e) {
    res.status(500).json({ 
        success: false,
        message: 'Failed to fetch clients'
     });
  };
});

router.get("/client", passport.authenticate("jwt", { session: false }),
async (req, res) => {
    try {
        const client = await prisma.client.findMany({
            where: {
                client_id: req.client_id
            }
            
        });
        if (client) {
            res.status(200).json({
                success: true,
                client

            });
        };
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Login is required for access"
        });
    };
});

router.get('/client/:id', async (req, res) => {
  const id = req.params;

  try {
    const client = await prisma.client.findUnique({ 
        where: { 
            client_id: parseInt(id) 
        } 
    });
    if (client) {
      res.status(200).json({
        success: true,
        client
      });
    } else {
      res.status(404).json({ 
        success: false, 
        message: 'Client not found' });
    }
  } catch (e) {
    res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch client' });
  }
});

router.post('/clients', passport.authenticate("jwt", { session: false }), 
async (req, res) => {
  
  try {
    const newClient = await prisma.client.create({
      data: {
        client_fname: req.body.client_fname,
        client_lname: req.body.client_lname,
        client_phone: req.body.client_phone,
        client_email: req.body.client_email,
        client_password: req.body.client_password,
        client_id: req.client.id
      },
    });
    if (newClient) {
        res.status(200).json({
            success: true,
            message: 'Client created successfully'
        });
    };
    
  } catch (e) {
    res.status(500).json({
    success: false, 
     message: 'Failed to create client'

    });
  };
});

router.put('/client/:id', passport.authenticate("jwt", { session: false }), 
async (req, res) => {

  const id  = req.params.client_id;
  
  try {
    const client = await prisma.pet.findUnique({
        where: {
            id: parseInt(id),
            client_id: req.client.client_id
        }
    });

    if (client){
    const updateClient = await prisma.client.update({
      where: { 
        client_id: parseInt(id) 
    },
      data: {
        client_email: req.body.client_email,
        client_password: req.body.client_password,
        client_fname: req.body.client_fname,
        client_lname: req.body.client_lname,
        client_phone: req.body.client_phone,
      },
    });
    
    if (updateClient) {
        res.status(200).json({
            success: true,
            message: "Client information updated successfully"
        })
    } else {
        res.status(500).json({
            success: false,
            message: "Failed to update client"
        });
    };
};
  } catch (error) {
    res.status(500).json({ 
        success: false,
        message: 'Failed to update client' 
        });
    };
});

router.delete('/clients/:id', passport.authenticate("jwt", { session: false }),

async (req, res) => {
    
  try {
    const deleteClient = await prisma.client.delete({ 
        where: { 
            client_id: parseInt(id) 
        } 
    });
    if (deleteClient){
        res.status(200).json({
            success: true, 
            message: 'Client deleted successfully' 
        
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Failed to delete client"
        })
    }
    
  } catch (e){
    res.status(500).json({
        success: false,
        message: 'Failed to delete client'
     });
  };
});

    return router; 
}
