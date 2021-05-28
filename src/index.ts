import * as express from 'express';
import HelloWorldController from '@/controllers/HelloController';

const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(
    '/api/v1',
    express.Router().get('/hello-world', (_req, res) => new HelloWorldController(res).hello()),
);

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
