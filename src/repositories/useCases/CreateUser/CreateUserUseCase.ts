import { User } from "../../../models/User";
import { UserRepository } from "../../implementations/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(data: ICreateUserRequestDTO) {
    try {


      // Cria uma instância da classe User para lógica de negócios
      const user = new User(data);

      await this.userRepository.save(user);
      console.log("User created", user); // Verifique se o usuário está correto aqui

      return {
        status: 200,
        message: `Usuário ${user.name} criado com sucesso`
      }
    } catch (erro: any) {
      return {
        status: 500,
        message: "Falha ao criar usuário"
      }
    }
  }
}
