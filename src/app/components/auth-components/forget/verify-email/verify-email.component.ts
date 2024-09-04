import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {
  constructor(private _Router: Router,private _authService: AuthService, private _toastr: ToastrService){}
  formData: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  onSubmit(formdata: FormGroup){
    this._authService.verifyEmail(formdata.value).subscribe({
      next: (resp)=>{
        if(resp.statusMsg == 'success' ){
          this._toastr.success(resp.message);
          this._Router.navigate(['/vcode']);
        }
      }
    });
  }
}
