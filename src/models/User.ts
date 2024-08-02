import { v4 as uuidv4 } from "uuid";
// import bcrypt from "bcryptjs";

// interface IUserProps {
//   name: string;
//   email: string;
// }

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    this.id = id ?? uuidv4();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password; // Esta linha define a senha como uma string vazia
  }
}

//   async comparePassword(password: string): Promise<boolean> {
//     return bcrypt.compare(password, this.passwordHash);
//   }

//   async setPassword(password: string): Promise<void> {
//     this.passwordHash = await bcrypt.hash(password, 8);
//   }
// }
