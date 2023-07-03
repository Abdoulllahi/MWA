import { RequestHandler } from "express";
import { IUser } from "./users.model";
import { IResponse } from "./types";
import { data } from "./users.model";

// 1. request params
// 2. response body
// 3. request body
// 4. request query params
export const addUser: RequestHandler<
    unknown,
   IResponse<IUser>,
    {name: string, email: string},
    unknown
    > = function (request, response, next) {
        data.users.push({
            _id: String(Date.now()),
            ...request.body
     })
    // response.json({ success: true, data: data.users });
};