const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname, 'models');
const withPassword = process.env.DB_PASS ? `:${process.env.DB_PASS}` : '';
const URI = `postgres://${process.env.DB_USER}${withPassword}@${process.env.DB_HOST}:${process.env.ENVIRONMENT === "dev"?5433:5432}/${process.env.DB_SCHEMA}`;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(URI, {
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
		file = 'models/' + file;
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
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
