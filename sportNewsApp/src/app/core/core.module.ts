import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { AuthService} from './auth.service';

@NgModule({
  declarations: [
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
  ]
})
export class CoreModule { }