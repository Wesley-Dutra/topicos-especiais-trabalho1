const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));

const viagensRout = require("./ViagensRout");
routes.use("/api", viagensRout);
module.exports = routes;