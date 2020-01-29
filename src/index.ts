import * as express from 'express';

const PORT = 8080;
const app = express();
// Adicionamos uma rota de teste
app.get('/hello-world', (req: express.Request, res: express.Response) => {
    res.json({
        message: 'Hello World',
    });
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
