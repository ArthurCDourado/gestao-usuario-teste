import { Route, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';

const routes: Route[] = [
    { path: '', redirectTo: 'lista' },
    { 
        path: 'lista',
        component: UsuariosListaComponent
    },
    {
        path: 'form/editar',
        component: UsuariosFormComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}