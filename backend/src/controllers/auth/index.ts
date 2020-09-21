import {Request,Response} from 'express';

export class AuthController {
    static redirect = async (req: Request, res: Response) => {
        res.send(200);
    }
}