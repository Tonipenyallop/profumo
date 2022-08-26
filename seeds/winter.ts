import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("winter").del();

  // Inserts seed entries
  await knex("winter").insert([
    {
      name: "Enigma Pour Homme",
      price: 450,
      concentration: "Parfum",
      size: "50ml",
      seasons: { spring: 3, summer: 1, fall: 5, winter: 5, day: 3, night: 5 },
      quantity: 1,
      description:
        "A fragrance which expertly balances the balsamic sweetness of Benzoin and Vanilla with the dry masculinity of Tobacco and Cognac, Enigma is an enticing experience which transforms any who wear it into a man of mystery and intrigue. An unusual effect occurs where the slightly powdery and Cherry-like tones of Heliotrope mingle with the mouth-watering quality of the Vanilla and Benzoin and appear to fizz, as the boozy splash of Cognac creates a delicious cocktail, which is enjoyed alongside a fine Cuban cigar, as the smoky tones of Tobacco are given a hot spark by the gentle spice notes of Cardamom, Ginger and Pepper.",
      url: "https://fimgs.net/mdimg/perfume/375x500.20559.jpg",
    },
    {
      name: "02 L'Air du Desert Marocain",
      price: 119,
      concentration: "Eau de Toilette Intense",
      size: "50ml",
      seasons: { spring: 3, summer: 3, fall: 5, winter: 5, day: 4, night: 5 },
      quantity: 1,
      description:
        "Powerful, sensual and pure. Lying on a bed in the desert, he watches the moon rise over the sand dunes of the Moroccan desert. The dream of a fragrance like a Moroccan night.",
      url: "https://fimgs.net/mdimg/perfume/375x500.4573.jpg",
    },
    {
      name: "Royal Oud",
      price: 350,
      concentration: "Eau de Parfum",
      size: "100ml",
      seasons: { spring: 4, summer: 2, fall: 4, winter: 5, day: 4, night: 5 },
      quantity: 1,
      description:
        "Rich, woody and oriental, Royal Oud’s opulence makes this fragrance well suited to both ladies and gentlemen of spiritual nature and assured elegance. Sandalwood, tonkin musk and oud combine to form the base notes of this majestic Eau de Parfum, whilst top notes of lemon, pink pepper and bergamot form a fresh twist to this classic and sophisticated scent",
      url: "https://fimgs.net/mdimg/perfume/375x500.12317.jpg",
    },
    {
      name: "Grand Soir",
      price: 160,
      concentration: "Eau de Parfum",
      size: "70ml",
      seasons: { spring: 2, summer: 1, fall: 5, winter: 5, day: 3, night: 5 },
      quantity: 1,
      description:
        "Grand Soir Maison Francis Kurkdjian eau de parfum invites you to perfect your allure and don your most beautiful effects. Lose yourself in an endless night and enjoy the never ending brilliance of an evening in Paris when bridges and monuments glow as though lit with a thousand lights. Majestically displayed against a twilight sky carried by the warm vanilla of benzoin from Siam and tonka beans from Brazil rattled by the deep darkness of cistus resin from Spain. This ambery fragrance dresses the skin with vibrant notes as you lose yourself in the energetic pace and mystery of a meandering night in the City of Light.",
      url: "https://fimgs.net/mdimg/perfume/375x500.40816.jpg",
    },
    {
      name: "Layton Exclusif",
      price: 305,
      concentration: "Parfum",
      size: "75ml",
      seasons: {
        spring: 3,
        summer: 1,
        fall: 5,
        winter: 5,
        day: 3,
        night: 5,
      },
      quantity: 1,
      description:
        "Generous, spirited and explosive, this Parfum asserts its strength and impetuousness. The striking new take on Layton is a deep, rich and woody fragrance for the connoisseur looking to make an impression. Top notes of bergamot, grapefruit and apple softly envelope the heart of cinnamon, lavender, agarwood and geranium. The base is concluded by guaiac wood, sensual vanilla and sweet cypriol. A revival on the traditional yet refined in its scent. ",
      url: "https://fimgs.net/mdimg/perfume/375x500.46633.jpg",
    },
  ]);
}
