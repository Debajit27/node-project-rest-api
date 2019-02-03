const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');
/*app.use('/' , (req,res,next)=>{

	res.status(200).json({ message: 'It is working' });

});*/

app.use(morgan('dev'));

//Routes for handel requests
app.use('/products' , productRoutes);
app.use('/order' , orderRoutes);

//Error handelling

app.use((req,res,next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error , req , res , next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message

	}});
})

module.exports = app;

