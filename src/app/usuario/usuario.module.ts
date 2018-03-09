import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CrearComponent } from './crear/crear.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [CrearComponent, MostrarComponent, UsuariosComponent]
})
export class UsuarioModule { }
