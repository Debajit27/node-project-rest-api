const express = require('express');

const router = express.Router();

router.get('/' , (req , res , next) => {

	res.status(200).json({
		message: 'Handeling Get request to /products'});
});

router.post('/' , (req , res , next) => {

	res.status(200).json({
		message: 'Handeling Post request to /products'});
});

router.get('/:productId' , (req , res ,next)=>{
	const id = req.params.productId;
	if(id === 'new'){
		res.status(200).json({
		message: 'you discovered the new id',
		id: id
		});

	}else{
		res.status(200).json({
		message: 'you given id is not correct'
		});

	}
});

router.patch('/:productId' , (req , res ,next)=>{
	const id = req.params.productId;
	res.status(200).json({
		message: 'updated product',
		id: id
	});
});

router.delete('/:productId' , (req , res ,next)=>{
	const id = req.params.productId;
	res.status(200).json({
		message: 'Deleted product',
		id: id
	});
});

module.exports = router;