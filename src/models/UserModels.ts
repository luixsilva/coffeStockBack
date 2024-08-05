import mongoose, { Schema, Document } from "mongoose";

// Interface para o documento do usuário
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

// Definição do esquema do usuário
const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Criação do modelo do usuário
const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
