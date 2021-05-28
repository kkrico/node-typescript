import helloService from '@/services/HelloService';
import { Request, Response } from 'express';
import { ResponseBuilder } from '@/models/ResponseBuilder';

export default class HelloWorldController {
    private readonly responseBuilder: ResponseBuilder;

    constructor(response: Response) {
        this.responseBuilder = new ResponseBuilder(response);
    }

    hello() {
        this.responseBuilder.buildResponse(() => helloService.hello());
    }
}
