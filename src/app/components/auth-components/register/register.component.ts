import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errMsg!:string;
  isLoading: boolean = false;
  constructor(private _auth: AuthService, private _Router: Router){

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{5,10}$/)]),
    phone: new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })
  onReset(){
    this.registerForm.reset();
  }
  sendData(){
    this.isLoading = true;
    if(this.registerForm.valid){
      this._auth.register(this.registerForm.value).subscribe({
        next: (response) =>{
          this.isLoading = false;
          if(response.message === "success"){
            this._Router.navigate(['/login'])
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.errMsg = err.error.message
         }
      
      })
    }else{
      this.registerForm.markAllAsTouched();
    }
  
    
  }
}
