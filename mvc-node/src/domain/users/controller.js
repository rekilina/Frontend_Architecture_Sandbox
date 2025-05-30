const e = require('express');
const userModel = require('./model');

module.exports = {
	getAll: (req, res) => { 
		return res.render('users.hbs', {
			users: userModel.getAll(),
		})
	},
	create: (req, res) => { 
		try {
			const { age, username } = req.body;

			if (!age || !username) {
				throw new Error('Not enough data');
			}

			userModel.create({ age, username });

			return res.redirect('/users');
		} catch (err) {
			return res.render('users-error.hbs', {
				message: e.message,
			});
		}
	},
	removeById: (req, res) => { 

	},
}