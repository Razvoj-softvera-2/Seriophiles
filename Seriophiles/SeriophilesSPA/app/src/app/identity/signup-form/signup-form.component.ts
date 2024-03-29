import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISignupRequest } from "../domain/models/ISignupRequest";
import { UserFacadeService } from "../domain/application-services/user-facade.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  public signupForm: FormGroup;

  constructor(private userService: UserFacadeService, private router: Router)
  {
    this.signupForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(7)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(7)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phoneNumber: new FormControl()
    })
  }

  public onSignupFormSubmit(): void {

    if(this.signupForm.controls['firstName'].invalid){
      window.alert('firstname invalid');
      return;
    }

    if(this.signupForm.controls['lastName'].invalid){
      window.alert('lastname invalid');
      return;
    }

    if(this.signupForm.controls['password'].invalid){
      window.alert('password invalid, you need 8 characters');
      return;
    }

    if(this.signupForm.controls['username'].invalid){
      window.alert('username invalid');
      return;
    }

    if(this.signupForm.controls['email'].invalid){
      window.alert('email invalid');
      return;
    }



    if(this.signupForm.value.password !== this.signupForm.value.confirmPassword){
      window.alert('Passwords doesnt match')
    }

    this.userService.signupUser(this.signupForm.value.firstName, this.signupForm.value.lastName , this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.email, this.signupForm.value.phoneNumber).subscribe((success : boolean) => {
      window.alert(`Signup ${success ? 'is' : 'is not'} successful!`);
    })
  }
}
