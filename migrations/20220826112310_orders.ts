import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("orders", (table) => {
    table.increments();
    table.string("email").notNullable();
    table.integer("order-number").notNullable();
    table.json("items").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("orders");
}
