import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("orders", (table) => {
    table.dropColumn("order-number");
    table.string("order_number").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("orders", (table) => {
    table.dropColumn("order_number");
    table.string("order-number").notNullable();
  });
}
