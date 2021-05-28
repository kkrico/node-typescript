import { ApiErrorResponse, ApiResponse } from '@/models/ApiResponse';
import { Response } from 'express';

export class ResponseBuilder {
    private readonly response: Response<any, Record<string, any>>;

    constructor(response: Response) {
        this.response = response;
    }

    buildResponse = (callback: () => ApiErrorResponse | ApiResponse): void => {
        let result = callback();
        if (result instanceof ApiErrorResponse) {
            this.response.status(400);
            this.response.json(result);

            return;
        }

        this.response.status(200);
        this.response.json(result);
    };
}
