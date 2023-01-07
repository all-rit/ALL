/* eslint-disable new-cap */
const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname, 'models');
const withPassword = process.env.DB_PASS ? `:${process.env.DB_PASS}` : '';
const URI = `postgres://${process.env.DB_USER}${withPassword}@${process.env.DB_HOST}:${process.env.ENVIRONMENT === 'dev'?5433:5432}/${process.env.DB_SCHEMA}`;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
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
const files = [];
const sortDir = (maniDir) => {
  const folders = [];
  const CheckFile = (filePath) => (fs.statSync(filePath).isFile());
  const sortPath = (dir) => {
    fs
        .readdirSync(dir)
        .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
        .forEach((res) => {
          const filePath = path.join(dir, res);
          if (CheckFile(filePath)) {
            files.push(filePath);
          } else {
            folders.push(filePath);
          }
        });
  };
  folders.push(maniDir);
  let i = 0;
  do {
    sortPath(folders[i]);
    i += 1;
  } while (i < folders.length);
};
sortDir(pathname);
files
    .forEach((file) => {
      const model = require(file)(sequelize, Sequelize.DataTypes);
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
