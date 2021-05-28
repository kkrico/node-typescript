interface IApiResponse {
    readonly sucess: boolean;
}

interface ISuccessFullApiResponse {
    data: any;
}

interface IApiErrorResponse {
    errors: string[];
}

export class ApiResponse implements IApiResponse, ISuccessFullApiResponse {
    data: any;
    sucess: boolean = true;

    constructor(data: any) {
        this.data = data;
    }
}

export class ApiErrorResponse implements IApiResponse, IApiErrorResponse {
    sucess: boolean = false;

    constructor(error: string) {
        this.errors = [];
        this.errors.push(error);
    }

    errors: string[];
}
