import { User } from "../../../models/User";
import { UserRepository } from "../../implementations/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const user = new User(data);

    await this.userRepository.save(user);
    console.log("user created", user); // Verifique se o usuário está correto aqui
  }
}
