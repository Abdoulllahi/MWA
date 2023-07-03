import { RequestHandler } from "express";

// 1. request params
// 2. response body
// 3. request body
// 4. request query params
export const requestHandler: RequestHandler<
    unknown,
    { success: string },
    { pet: string },
    unknown
> = function (request, response, next) {
    response.json({ success: request.body.pet });
};
