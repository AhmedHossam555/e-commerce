import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  constructor(private _Router: Router, private _authService: AuthService ){}
  formData: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, Validators.required)
  })
  onSubmit(formdata: FormGroup){
    this._authService.ResetPassword(formdata.value).subscribe({
      next:(resp)=>{
        localStorage.setItem('userToken', resp.token);
        this._authService.userInformation();
        this._Router.navigate(['/home']);
      }
    })
    
  }
}
