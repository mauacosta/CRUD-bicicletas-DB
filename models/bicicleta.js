const knex = require("../database/connection");
let Bicicleta = function (id, color, modelo, lat, lon) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.lat = lat;
  this.lon = lon;
};

Bicicleta.all = () => {
  return knex.select("*").from("bicicleta");
};

Bicicleta.prototype.toString = function () {
  return `Id: ${this.id}, color: ${this.color}`;
};

Bicicleta.add = function (aBici) {
  return knex("bicicleta").insert({
    id: aBici.id,
    color: aBici.color,
    modelo: aBici.modelo,
    lat: aBici.lat,
    lon: aBici.lon,
  });
};

Bicicleta.update = (aBiciId, aBici) => {
  return knex("bicicleta")
    .update({
      color: aBici.color,
      modelo: aBici.modelo,
      lat: aBici.lat,
      lon: aBici.lon,
    })
    .where("id", aBiciId);
};

Bicicleta.findById = function (aBiciId) {
  return knex.select("*").from("bicicleta").where("id", aBiciId);
  /*let aBici = Bicicleta.all.find((x) => x.id == aBiciId);
  if (aBici) {
    return aBici;
  } else {
    throw new Error(`No existe una bici con el id: ${aBiciId}`);
  }*/
};

Bicicleta.removeById = function (aBiciId) {
  return knex("bicicleta").delete().where("id", aBiciId);
};

module.exports = Bicicleta;
