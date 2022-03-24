/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bicicleta").del();
  await knex("bicicleta").insert([
    {
      id: 1,
      color: "Rojo",
      modelo: "bmx",
      lat: 19.284770943610578,
      lon: -99.13729060406136,
    },
    {
      id: 2,
      color: "Blanca",
      modelo: "Benotto",
      lat: 19.286055116801744,
      lon: -99.1369912899661,
    },
  ]);
};
