import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
//import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
//import {MatInput} from "@angular/material/input";
//import {MatButton} from "@angular/material/button";
//import {MatFormField} from "@angular/material/form-field";


@NgModule({
  declarations: [
    IdentityComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserInfoComponent
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class IdentityModule { }
