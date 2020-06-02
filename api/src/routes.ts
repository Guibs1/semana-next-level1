import express from 'express';

import PointsController from './controllers/PointsContoller';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsContoller = new PointsController();
const itemsController = new ItemsController();
// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

// RequestParams = define recurso (obrigatorio)
// Query Param = opicionais/ tem nome - filtros paginações
// Request body = parametros de criação e atualização de informações

// const fillteredUsers = search ? users.filter(user => user.includes(search)) : users;

routes.get('/items', itemsController.index);
routes.post('/points', pointsContoller.create);
routes.get('/points', pointsContoller.index);
routes.get('/points/:id', pointsContoller.show);

export default routes;