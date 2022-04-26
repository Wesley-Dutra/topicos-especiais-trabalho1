const express = require('express');
const routes = express.Router();
const controle = require('../controller/ViagensCont');

routes.route('/viagens').get(controle.listar);
routes.route('/viagens').post(controle.incluir);
routes.route('/viagens').put(controle.alterar);
routes.route('/viagens/:id').delete(controle.excluir);
routes.route('/viagens/filtro/:filtro').get(controle.filtrar);
module.exports = routes;