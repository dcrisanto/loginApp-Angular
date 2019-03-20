import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private angularFireAuth: AngularFireAuth) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.angularFireAuth.authState
           .pipe(take(1))
           .pipe(map(authState => !!authState))
           // Cuando el usuario no esté logado se dirige a la página del login
           .pipe(tap( authenticated => {
             if(!authenticated){
               this.router.navigate(['login']);
             }
           }));
  }
}
