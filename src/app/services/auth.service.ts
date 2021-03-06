import { Injectable } from '@angular/core';
// Importando las dependencias instaladas de Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Inyectando privado a public
  constructor( public angularFireAuth: AngularFireAuth ) { }
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

// Método para el logeo con Google
loginGoogle() {
  // Para acceder con una ventana emergente, llama a signInWithPopup:
  return this.angularFireAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
}

// Método para el logeo con Facebook
loginFacebook() {
  return this.angularFireAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
}

// Método para obtener el usuario que accedió
   getCurrent(){
    return this.angularFireAuth.auth.currentUser != null 
   }
// Método que nos devolverá el estado del usuario si está logeado o no
   getAuth() {
      return this.angularFireAuth.authState.pipe(map(auth => auth));
    }
// Método para salir de la sesión del usuario
   logout() {
     return this.angularFireAuth.auth.signOut();
   }
}
