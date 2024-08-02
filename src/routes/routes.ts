import { createUserController } from "../repositories/useCases";

import { Router, request, response } from "express";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
