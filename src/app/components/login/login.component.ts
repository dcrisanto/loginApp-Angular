import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email: string;
password: string;

  constructor( public authService: AuthService,
               public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password)
        .then((resp) => {
          console.log(resp);
          this.router.navigate(['/privado']);
        }).catch((err) => {
          console.log(err);
          this.router.navigate(['/login']);
        });
  }

}
