import { Request, Response, NextFunction } from "express";

type RouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response<any, Record<string, any>> | void>;

export let catchAsync = (routeHandler: RouteHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    routeHandler(req, res, next).catch((err) => next(err));
  };
};
