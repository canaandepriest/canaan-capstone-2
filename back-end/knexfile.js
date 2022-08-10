// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 require('dotenv').config();
 const path = require("path");
 
 const {
   DATABASE_URL = "postgres://rugvoxop:9v7L0zRim4LLOFn0nCfPXJkMp9R1BSYg@batyr.db.elephantsql.com/rugvoxop",
   DATABASE_URL_DEVELOPMENT = "postgres://qxosnnmj:OM2SgVpHKWA3dWIULnc2ScRU826bJycF@suleiman.db.elephantsql.com/qxosnnmj",
   DATABASE_URL_TEST = "postgres://ocbbjaqg:JOx2Lu2pCVnE0LQVWSozMRlCYIvsDctO@suleiman.db.elephantsql.com/ocbbjaqg",
   DATABASE_URL_PREVIEW = "postgres://sxigglms:OPHMrwEDNxEwZ_nW6WZIN8Hg2wEvhe9S@batyr.db.elephantsql.com/sxigglms",
   DEBUG,
 } = process.env;
 
 module.exports = {
   development: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_DEVELOPMENT,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   test: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_TEST,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname,  "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   preview: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_PREVIEW,
     migrations: {
       directory: path.join(__dirname,  "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname,  "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   production: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
 };
 