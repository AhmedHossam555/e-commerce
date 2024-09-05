import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errMsg!: string;
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Za-z0-9]{5,10}$/)]),
  })
  constructor(private _AuthService: AuthService, private _Router: Router){

  }
  onReset(){
    this.loginForm.reset();
  }
  sendData(){
    this.isLoading = true;
    if(this.loginForm.valid){
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (resp) => {
          if(resp.message == "success"){
            window.localStorage.setItem('userToken', resp.token)
            this._Router.navigate(['/home']);
            this._AuthService.userInformation();
            this.isLoading = false;
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errMsg = err.error.message;
        }
      })
    }else{
      this.loginForm.markAllAsTouched();
    }

  }

}
