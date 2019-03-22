import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email: string;
password: string;

  constructor( public authService: AuthService,
               public router: Router,
               public flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.login(this.email, this.password)
        .then((resp) => {
          console.log(resp);
          this.flashMessagesService.show('Se ha logeado correctamente',
          {cssClass: 'alert-success', timeout: 4000});
          this.router.navigate(['/privado']);
        }).catch((err) => {
          console.log(err);
          this.flashMessagesService.show(err.message,
          {cssClass: 'alert-danger', timeout: 4000});
          this.router.navigate(['/login']);
        });
  }

}
