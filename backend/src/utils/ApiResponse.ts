export class ApiResponse<T = unknown> {
    public readonly success: boolean;
    public readonly statuscode: number;
    public readonly message: string;
    public readonly data?: T;

    constructor(options: {
        statuscode: number;
        message: string;
        data?: T;
    })
    {
        this.statuscode = options.statuscode;
        this.message = options.message;
        this.data = options.data;
        this.success = options.statuscode < 400;
    }
}
