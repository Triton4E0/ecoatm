import { Constants } from './utils/constants';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { AlertComponent } from './views/alert/alert.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard, JwtInterceptor } from './helpers';
import { AuthenticateService } from './services';
import { ForgetPasswordComponent } from './views/login/forget-password/forget-password/forget-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AlertComponent,
    DashboardComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticateService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
