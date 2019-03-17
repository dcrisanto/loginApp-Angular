import { Component, OnInit } from '@angular/core';
// Importando para poder usar todos los métodos del servicio
import { AuthService } from '../../services/auth.service';
// Realizar una redirección importar router
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Creando las propiedades que le vamos a pasar
  email: string;
  password: string;
  // Inyectando el servicio y router para la redirección
  constructor( public authService: AuthService,
               public router: Router ) { }

  ngOnInit() {
  }
  // Método que ejecutará el formulario
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
        // Devuelve una promesa
        .then( (resp) => {
          console.log(resp);
          // Lo redireccionamos cuando el registro está ok
          this.router.navigate(['/privado']);
        }).catch((err) => {
          console.log(err);
        });
  }
}
