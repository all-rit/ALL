/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// const db = require('../../server/database/index');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async(on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const fs = require('fs');
  const path = require('path');
  const pathname = path.join(__dirname, '/../../server/database/models');
  const Sequelize = require('../../server/node_modules/sequelize');
  const withPassword = config.env.DB_PASS ? `:${config.env.DB_PASS}` : '';
  const URI = `postgres://${config.env.DB_USER}${withPassword}@${config.env.DB_HOST}:${config.env.ENVIRONMENT === "dev" ? 5433:5432}/${config.env.DB_SCHEMA}`;
  const database = async() => {
    try {
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
      })
      const db = {};
      await sequelize
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
        const CheckFile = filePath => (fs.statSync(filePath).isFile());
        const sortPath = (dir) => {
          fs
            .readdirSync(dir)
            .filter(file => (file.indexOf(".") !== 0) && (file !== "index.js"))
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
      
      return db;
     
    } catch (err) {
      console.log('error: ', err)
    }
  };
  const db = await database();
  on('task', {
    async userLabComplete({section, userid}) {
      switch (section){
        case "about":
          return new Promise((resolve, reject) => {
            db.Session.findOne({
              where: {userid: userid}
            }).then(res => {
              db.UserLab.findOne({
                where: {
                  usersessionid: res.usersessionid,
                  labid: 1
                }
              }).then(userlab => {
                return resolve(userlab)
              })
            })
          })
        default:
          return true
      }
    },
    async userToSession(userid) {
      return new Promise((resolve, reject) => {
        db.Session.findOne({
          where: {userid: userid}
        }).then(session => {
          return resolve(session.usersessionid)
        })
      });
    }
  })
}
