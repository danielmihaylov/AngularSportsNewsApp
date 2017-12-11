import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { AuthService} from './auth.service';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    HttpService,
    AuthService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }