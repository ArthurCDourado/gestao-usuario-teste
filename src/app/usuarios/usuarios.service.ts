import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = `https://randomuser.me/api/`;

  constructor(public http: HttpClient) { }

  listarUsuarios(page:number, perPage: number): Observable<any[]> {
    return this.http.get<UsuarioModel[]>(`${this.url}?page=${page}&results=${perPage}`);
  }

  buscarPorEmail(email: string): Observable<any> {
    return this.http.get<UsuarioModel>(`${this.url}?email=${email}`);
  }
}
