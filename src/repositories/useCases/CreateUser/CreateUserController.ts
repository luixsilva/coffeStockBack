import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const data = await this.createUserUseCase.execute({ name, email, password });
      return response.status(201).json(data);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
