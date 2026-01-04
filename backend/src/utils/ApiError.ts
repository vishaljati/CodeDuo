import type { ApiErrorType } from "../types/apiError.types.js";


class ApiError extends Error implements ApiErrorType {
    constructor(
        public statusCode: number,
        public stack: string,
        public errors: [],
        public message: string = "Something went wrong",
        public data?: unknown,
        public success = false,

    ) {

        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }


    }
}

export { ApiError }