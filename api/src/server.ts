import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'guilherme',
        'jubileu',
        'outro',
        'asdads'
    ]);
})

app.listen(3333);