import { Component } from '@angular/core';
import {identity} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationFacadeService} from "../domain/application-services/authentication/authentication-facade.service";
import {Router} from "@angular/router";
import {ILoginFormData} from "../domain/models/ILoginFormData";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  protected readonly identity = identity;

  public loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationFacadeService, private routerService: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {}

  public onLoginFormSubmit(): void {
    if (this.loginForm.invalid) {
      window.alert('Form has errors!');
      return;
    }

    const data: ILoginFormData = this.loginForm.value as ILoginFormData;
    this.authenticationService.login(data.username, data.password).subscribe((success: boolean) => {
      window.alert(`Login ${success ? 'is' : 'is not'} successful!`);
      this.loginForm.reset();
      if (success) {
        this.routerService.navigate(['/identity', 'profile']);
      }
    });
  }

}
