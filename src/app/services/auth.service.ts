import { Injectable } from '@angular/core';
// Importando las dependencias instaladas de Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Inyectando
  constructor( private angularFireAuth: AngularFireAuth ) { }
// Método para creación de usuario
   registerUser(email: string, password: string) {
     // Devolver una nueva función a modo de promesa
     return new Promise((resolve, reject) => {
       // Pasar el email y password para crear la cuenta nueva
       this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
       // Entonces nos devolverá userData si está ok
       .then(userData => resolve(userData),
           error => reject(error));
     });
   }
// Método login para el acceso
login(email: string, password: string) {
  // Devolver una nueva función a modo de promesa
  return new Promise((resolve, reject) => {
    // Pasar el email y password para acceder a la cuenta existente
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    // Entonces nos devolverá userData si está ok
    .then(userData => resolve(userData),
        error => reject(error));
  });
}
// Método para obtener los datos del usuario si está logeado
   // getAuth() {
     // return this.angularFireAuth.authState.map(auth => auth);
   // }
// Método para salir de la sesión del usuario
   logout() {
     return this.angularFireAuth.auth.signOut();
   }
}
