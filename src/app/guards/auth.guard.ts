import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private angularFireAuth: AngularFireAuth) {
  }

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.angularFireAuth.authState
           .pipe(take(1))
           .pipe(map(authState => !!authState))
           // Cuando el usuario no esté logado se dirige a la página del login
           .pipe(tap( authenticated => {
             if(!authenticated){
               this.router.navigate(['login']);
             }
           }));*/
    canActivate() {
      if (this.authService.getCurrent()){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    }
  }

