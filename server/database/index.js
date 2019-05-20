const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname, 'models');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	define: {
		timestamps: false
	}
});
const db = {};

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});

fs
	.readdirSync(pathname)
	.filter((file) => {
		return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
	})
	.forEach((file) => {
		const model = sequelize.import(path.join(pathname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
