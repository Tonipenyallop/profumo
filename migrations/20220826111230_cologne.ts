import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("top", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("url").notNullable();
    table.text("description").notNullable();
    table.string("size").notNullable();
    table.string("concentration").notNullable();
    table.integer("price").notNullable();
    table.json("seasons").notNullable();
    table.integer("quantity").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("top");
}
