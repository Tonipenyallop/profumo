import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("order_numbers").del();

  // Inserts seed entries
  await knex("order_numbers").insert([{ order_number: 84274 }]);
}
