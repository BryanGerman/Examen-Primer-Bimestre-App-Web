import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario: string;
  constructor(private _usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioServicio.getUsuario();
  }
  perfiles = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'profile1.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'profile1.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'profile1.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'profile1.png'
    },
    {
      id: 5,
      nombrePerfil: 'Nancy',
      nombreImagen: 'profile1.png'
    }
  ];
}
