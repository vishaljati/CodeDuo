export interface ApiErrorType{

    statusCode: number;
    message: string;
    stack: string;
    errors?:[];
    data?: unknown;
    success: boolean;


}