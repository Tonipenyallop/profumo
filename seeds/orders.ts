import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("orders").del();
  // Inserts seed entries
  await knex("orders").insert([
    {
      email: "practice@gmail.com",
      items: {
        "Silver Mountain Water": {
          quantity: 1,
          name: "Silver Mountain Water",
          url: "https://fimgs.net/mdimg/perfume/375x500.472.jpg",
          price: "€405",
        },
      },
      order_number: 84274,
    },
  ]);
}
