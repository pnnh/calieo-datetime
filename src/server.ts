import express, {Request, Response, NextFunction} from "express";
import http from "http";
import cors from 'cors'
import stripAnsi from "strip-ansi";
import {isProd} from "@/server/config";

function handleErrors(
    handlerFunc: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | undefined | void>) {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handlerFunc(req, res);
        } catch (e) {
            next(e);
        }
    }
}


function runMain() {

    const server = express();
    const workerPort = 8005

    // 解决跨域问题
    server.use(cors({
        credentials: true,
        origin: true,
    }));
    server.use(express.json());

    server.use(express.static('dist', {
        etag: isProd(),
        maxAge: isProd() ? 30000 : 0,
    }))
    server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        const message = stripAnsi(err.stack || err.message || 'Unknown error')
        res.status(500).send({
            asset: 'failed',
            message: message
        })
    })

    const httpServer = http.createServer(server);

    httpServer.listen(workerPort, async () => {
        console.log(
            `Worker server is running on http://localhost:${workerPort}`,
        );
    });
}

runMain();
