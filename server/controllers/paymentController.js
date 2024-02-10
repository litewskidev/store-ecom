import asyncHandler from 'express-async-handler';
import stripe from 'stripe';

//  desc     Add new payment
//  route    POST /api/payments
const newPayment = asyncHandler(async (req, res) => {
	stripe(process.env.STRIPE_KEY).charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json(stripeErr);
			} else {
				res.status(200).json(stripeRes);
			}
		},
	);
});

export { newPayment };
