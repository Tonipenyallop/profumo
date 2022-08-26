import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("username").notNullable();
    table.string("address").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {}
