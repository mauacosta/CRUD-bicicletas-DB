let express = require("express");
let router = express.Router();

let bicicletasControllerAPI = require("../../controllers/api/bicicletasControllerAPI");

router.get("/", bicicletasControllerAPI.bicicleta_list);

router.post("/create", bicicletasControllerAPI.bicicleta_create);

router.post("/delete", bicicletasControllerAPI.bicicleta_delete);

module.exports = router;
