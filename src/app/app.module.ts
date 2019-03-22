import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

// Importar módulo simple que proporciona componentes y servicios para mostrar mensajes flash.
import { FlashMessagesModule } from 'angular2-flash-messages';
// Importar el services
import { FlashMessagesService } from 'angular2-flash-messages';


// Importar para llevar a cabo la conexión a firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Importar la configuración de firebase
import { environment } from '../environments/environment';

// Importando los servicios
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PrivadoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Para la conexión:
    AngularFireAuthModule,
    // Inicializar la aplicación, pasandole como parámetro la configuración de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
  ],
  providers: [
    AuthService, AuthGuard, FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
