const express = require('express');
const path = require('path');
const cors = require('cors');
const userController = require('./domain/users/controller');

const PORT = 5000;

const app = express();

const corsOptions = {
	origin: '*', // or specify your frontend URL instead of '*'
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
};

// use handlebars
app.set("view engine", "hbs");
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));  // enable all CORS requests

// add controller to /users route
app.get('/users', userController.getAll);
app.get('/users/create', userController.create);

// run server
app.listen(PORT, () => console.log("server started on PORT: " + PORT))