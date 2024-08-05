import { IUserRepository } from "../IUserRepository";
import UserModel from "../../models/UserModels";
import { User } from "../../models/User";

export class UserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    // Cria um novo documento de usuário usando o modelo do Mongoose
    const userDoc = new UserModel({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    await userDoc.save(); // Salva o usuário no banco de dados
  }
}
