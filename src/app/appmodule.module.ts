import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';



@NgModule({
  declarations: [
    SignupformComponent,
    LoginformComponent
  ],
  imports: [
    CommonModule
    
  ]
})
export class AppmoduleModule { }
