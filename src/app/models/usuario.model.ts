import { NomeModel } from 'src/app/models/nome.model';
import { LoginModel } from 'src/app/models/login.model';

export class UsuarioModel {
    constructor(
        public id: number,
        public name: NomeModel,
        public email: string,
        public login: LoginModel
    ) {}
}