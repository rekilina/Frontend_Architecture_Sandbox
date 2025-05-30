let users = [
	{
		id: 1,
		username: "Ivan",
		age: 28,
	}
]

module.exports = {
	create: ({ username, age }) => {
		const newUser = {
			username,
			age,
			id: String(new Date),
		};

		if (!users.find(user => user.username === username)) {
			users.push(newUser);
		} else {
			throw new Error(`User ${username} already exists`);
		}
	},
	removeById: ({ id }) => {
		const userIndex = users.findIndex(user => user.id === id);

		if (userIndex === -1) {
			throw new Error(`User with id ${id} doesn't exists`);
		}

		users.splice(userIndex, 1);

		return id;
	},
	removeByUserName: ({ username }) => {
		const userIndex = users.findIndex(user => user.username === username);

		if (userIndex === -1) {
			throw new Error(`User with username ${username} doesn't exists`);
		}

		users.splice(userIndex, 1);

		return username;
	},
	getAll: () => {
		return users;
	},
	getById: () => {
		return users.find(user => user.id === id);
	},
}