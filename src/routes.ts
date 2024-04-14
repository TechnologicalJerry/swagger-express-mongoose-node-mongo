import { Express, Request, Response } from "express";

function routes(server: Express) {

    server.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

}

export default routes;