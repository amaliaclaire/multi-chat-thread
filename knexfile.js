"use strict"
const path = require("path")

module.exports = {
    development: {
        client: "pg",
        connection: 'postgres://localhost/knex_chatbox',
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/generator',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },

    test: {
        client: "pg",
        connection: "postgres://localhost/knex_chatbox",
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/knex_chatbox',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, "db", "migrations")
        },
        seeds: {
            directory: path.join(__dirname, "db", "seeds")
        }
    }

  }
}
}
}
}
