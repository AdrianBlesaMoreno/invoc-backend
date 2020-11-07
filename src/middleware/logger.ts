import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response) => {
    console.log('Request logged:', req.method, req.path)
}

export default loggerMiddleware
