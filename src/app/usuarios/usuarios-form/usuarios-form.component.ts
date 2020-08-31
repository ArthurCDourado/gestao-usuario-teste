import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: UsuarioModel;

  usuarioModeLMock: UsuarioModel = 
  {
    id: 1,
    name: {
      id: 1,
      first: 'Arthur',
      last: 'Carlos'
    },
    email: 'arthurcarlos@email.com',
    login: {
      id: 1,
      username: 'nickname',
      password: 'password'
    }
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.editar();
  }

  criarFormulario(): void {
    this.usuarioForm = this._formBuilder.group({
      name: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  atualizarFormulario(usuario: UsuarioModel) {
    this.usuarioForm.setValue({
      name: usuario.name.first,
      sobrenome: usuario.name.last,
      email: usuario.email,
      username: usuario.login.username
    });
  }

  editar(): void {
    this.atualizarFormulario(this.usuarioModeLMock);
  }

  /*
  getByProperty() API não suporta?!

  editar(email: string): void {
    this.isLoading = true;
    this.usuarioService.buscarPorEmail(email).subscribe(
      (res: any) => {
        this.usuarioForm.reset(res.results);
      }
    );
  }
  */
}
