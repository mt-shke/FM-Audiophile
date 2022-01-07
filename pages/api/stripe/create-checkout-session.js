const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
	if (req.method === "POST") {
		try {
			const products = req.body.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.name,
						},
						unit_amount: +item.price * 100,
					},
					quantity: item.quantity,
				};
			});

			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create({
				line_items: products,
				mode: "payment",
				success_url: `${req.headers.origin}/checkout-success/?success=true&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			});
			res.json({ url: session.url });
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};

export default handler;
