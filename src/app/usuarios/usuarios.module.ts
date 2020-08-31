import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { SharedModule } from '../shared/shared.module';
import { BottonSheetConfirmaComponent } from '../shared/botton-sheet-confirma/botton-sheet-confirma.component';

@NgModule({
  declarations: [UsuariosListaComponent, UsuariosFormComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  providers: [UsuariosService],
  entryComponents: [BottonSheetConfirmaComponent]
})
export class UsuariosModule { }
