import { ApiResponse, ApiErrorResponse } from '@/models/ApiResponse';

const condicaoMagica = () => {
    var numero = Math.floor(Math.random() * 10);

    return numero % 2 === 0;
};

class HelloService {
    hello(): ApiErrorResponse | ApiResponse {
        if (condicaoMagica()) {
            return new ApiResponse({
                message: 'Mensagem de Sucesso',
            });
        } else {
            return new ApiErrorResponse('Algo deu errado :(');
        }
    }
}

export default new HelloService();
