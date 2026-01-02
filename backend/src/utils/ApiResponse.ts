export class ApiResponse<T = unknown> {
    public readonly success: boolean;
    public readonly statusCode: number;
    public readonly message: string;
    public readonly data?: T;

    constructor(options: {
        statusCode: number;
        message: string;
        data?: T;
    })
    {
        this.statusCode = options.statusCode;
        this.message = options.message;
        this.data = options.data;
        this.success = options.statusCode < 400;
    }
}
