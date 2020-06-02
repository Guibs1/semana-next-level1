import express from 'express';

const routes = express.Router();
// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

// RequestParams = define recurso (obrigatorio)
// Query Param = opicionais/ tem nome - filtros paginações
// Request body = parametros de criação e atualização de informações

// const fillteredUsers = search ? users.filter(user => user.includes(search)) : users;

routes.get('/', (request, response) => {
    return response.json({ message: "Hello World"});
})

export default routes;