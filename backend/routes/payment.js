import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_KEY);
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "100 Dollars" }],
  [2, { priceInCents: 200000, name: "Two thousand" }],
]);

router.post("/", async (request, response) => {
  console.log(request.body.items);
  //request.body.payment_fee instead of storeItems
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: request.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:${import.meta.env.VITE_PORT}/success.html`,
      cancel_url: `http://localhost:${import.meta.env.VITE_PORT}/`,
    });
    console.log(session.line_items);
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   mode: "payment",
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: "usd",
    //         product_data: {
    //           name: "Plumbing",
    //         },
    //         unit_amount: 70000,
    //         quantity: 1,
    //       },
    //     },
    //   ],

    //   success_url: "http://localhost:4000/success.html",
    //   cancel_url: "http://localhost:4000/",
    // });
    // console.log(session);
    response.json({
      url: session.url,
    });
  } catch (e) {
    console.log(e);
    response.status(500).json({ error: e.message });
  }
});

export default router;
