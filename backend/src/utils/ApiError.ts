export interface ApiErrorOptions {
    statusCode: number;
    message?: string;
    errors?: unknown[];
}
// NOTE : IMPROVE CODE (receive 2 argument)

class ApiError extends Error {
    public readonly statusCode: number;
    public readonly success = false;
    public readonly errors: unknown[];

    constructor({ statusCode, message = "Something went wrong", errors = [] }: ApiErrorOptions) {
        super(message);

        this.name = "ApiError";
        this.statusCode = statusCode;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiError };