import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private _auth: AuthService){

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    phone: new FormControl(null),
  })
  sendData(){
    this._auth.register(this.registerForm.value).subscribe({
      next: (response) =>{console.log(response)},
    })
    console.log(this.registerForm.value)
  }
}
