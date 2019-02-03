const express = require('express');

const router = express.Router();

router.get('/' , (req , res , next) => {

	res.status(200).json({
		message: 'Order were fetched'});
});

router.post('/' , (req , res , next) => {

	res.status(201).json({
		message: 'Orders were created'});
});

router.get('/:orderId' , (req , res , next) => {

	res.status(201).json({
		message: 'Specific order details fetched',
		orderId: req.params.orderId
	});
});

router.delete('/:orderId' , (req , res , next) => {

	res.status(201).json({
		message: 'Specific order Deleted',
		orderId: req.params.orderId
	});
});

module.exports = router;