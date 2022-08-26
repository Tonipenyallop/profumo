import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("summer").del();

  // Inserts seed entries
  await knex("summer").insert([
    {
      name: "Silver Mountain Water",
      price: 405,
      concentration: "Eau de Parfum",
      size: "100ml",
      seasons: { spring: 5, summer: 5, fall: 2, winter: 1, day: 5, night: 2 },
      quantity: 1,
      description:
        "The adventurous Silver Mountain Water evokes sparkling streams coursing through the snow-capped Swiss Alps, a bracing landscape in which Olivier Creed, a championship skier, finds relaxation and renewal. A bestseller since its launch, this modern marine/green scent captures the purity of the mountains-soft, milky-sweet blackcurrants mixed with green tea, the richness of bergamot, and sandalwood. Its opaque white bottle hints at icy snowbanks topped with a glistening cap.",
      url: "https://fimgs.net/mdimg/perfume/375x500.472.jpg",
    },
    {
      name: "Vetiver Pour Homme",
      price: 445,
      concentration: "Eau de Parfum",
      size: "50ml",
      seasons: { spring: 5, summer: 4, fall: 4, winter: 3, day: 5, night: 3 },
      quantity: 1,
      description:
        "A fragrance dedicated to the sensory perfection of Vetiver - an oil obtained from the root of an exotic grass, which perfectly balances earthy, leathery and smoky tones, and as a result is a mainstay of masculine perfumery. Bright Citrus notes mingle with the vibrant green qualities of Galbanum and Celery Seed for a natural freshness, the earthiness of which is strengthened via both Cedar Wood and Needles, alongside a dry bed of Oakmoss. Touches of Pink Pepper, Caraway and Nutmeg swirl around a prominent note of Black Pepper, drawing out a smoky sensuality, whilst hiding in the shadows are the leathery notes of Cistus and Labdanum, which draw out the Vetiver’s inherent leathery assertiveness.",
      url: "https://fimgs.net/mdimg/perfume/375x500.48797.jpg",
    },
    {
      name: "Gypsy Water",
      price: 261,
      concentration: "Eau de Parfum",
      size: "100ml",
      seasons: { spring: 4, summer: 4, fall: 4, winter: 3, day: 5, night: 2 },
      quantity: 1,
      description:
        "Gypsy Water is an ode to the beauty of Romani culture, its unique customs, intimate beliefs and distinguished way of living. The scent wakens a dream of a colorful lifestyle made of innate nomadism. Woody notes of pine needle and sandalwood associated to intense amber and fresh citrus evoke the fever of gypsy nights spent in the forest. ",
      url: "https://fimgs.net/mdimg/perfume/375x500.3575.jpg",
    },
    {
      name: "Hacivat",
      price: 320,
      concentration: "Eau de Parfum",
      size: "100ml",
      seasons: { spring: 5, summer: 5, fall: 4, winter: 2, day: 5, night: 3 },
      quantity: 1,
      description:
        "Is a tribute to elegance, kindness, competence, and love of art. Inspired by the traditional shadow play character, this eau chypre will help you live in your best dreams by the everlasting sparkles of its joyful structure made of the stimulating notes of pineapple and bergamot backed with the genuine woody notes. Enjoy being loved with this blissful scent that has become an iconic scent for many in such a short period of time!",
      url: "https://fimgs.net/mdimg/perfume/375x500.44174.jpg",
    },
    {
      name: "Musk Therapy",
      price: 350,
      concentration: "EXTRAIT DE PARFUM",
      size: "90ml",
      seasons: {
        spring: 5,
        summer: 5,
        fall: 3,
        winter: 2,
        day: 5,
        night: 2,
      },
      quantity: 1,
      description:
        "Close your eyes, Smell and feel a new way of sensations, Experience the power of scent therapy. Natural white sandalwood blended with an overdose of white and pink musk creates an ultra-addictive milky and velvety accord. The white magnolia activates the pleasure receptor while the cassis stimulates the energy, releasing a supplement of eroticism. MUSK THERAPY, a magical mood enhancer, paves the way to relaxation and a state of well-being. Finally, a delightful alternative to artificial paradises and their illicit substances.",
      url: "https://fimgs.net/mdimg/perfume/375x500.66097.jpg",
    },
  ]);
}
