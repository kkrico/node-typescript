/* eslint-env node, mocha */
import * as express from 'express';

const PORT = process.env.PORT ?? 8080;
const app = express();

const helloWorld = (req: express.Request, res: express.Response) => {
    res.json({
        message: 'Mensagem de exemplo',
    });
};

app.use('/api/v1', express.Router().get('/hello-world', helloWorld));

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
