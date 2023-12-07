import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateMiddleware = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      //validation
     try{
      const zodParsedData = await schema.parseAsync({
          body: req.body
        });
    
        next();
     }
     catch(err){
      next(err)
     }
    };
  };
  export default validateMiddleware