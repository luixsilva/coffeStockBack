import { User } from "../models/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
}
