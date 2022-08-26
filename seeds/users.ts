import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();
  // Inserts seed entries
  await knex("users").insert({
    email: "practice@gmail.com",
    password: 12341234,
    address: "Bankrasweg 1, 1183 TP Amstelveen, Netherlands",
    username: "Toni Peña",
  });
}
