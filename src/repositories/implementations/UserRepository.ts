import { IUserRepository } from "../IUserRepository";
import { User } from "../../models/User";

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
