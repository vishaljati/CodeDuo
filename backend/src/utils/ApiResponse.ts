import type { ApiResponseType } from "../types/apires.types.js";

class ApiResponse<T> implements ApiResponseType {
    constructor(
        public statusCode: number,
        public message: string,
        public data?: T,
        public success = true
    ) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }