// Update with your config settings.
import type { Knex } from "knex";
import dotenv from 'dotenv'
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const config: { [key: string]: Knex.Config } = {

  

  development: {
    client: 'postgresql',
    connection: {
      database: 'profumo',
      user:     process.env.DB_USER,
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection : process.env.DB_URI,
    // connection: {
    //   database: process.env.DB_NAME,
    //   user: process.env.DB_USER,
    //   password: process.env.PASSWORD,
    //   port: process.env.PORT as unknown as number
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

module.exports = config