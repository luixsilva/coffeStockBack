import { CreateUserController } from "./CreateUser/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { UserRepository } from "../implementations/UserRepository";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
