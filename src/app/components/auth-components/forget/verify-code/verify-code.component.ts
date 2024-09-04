import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {
  constructor(private _Router: Router, private _authService: AuthService, private _toatr: ToastrService ){}
  formData: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6}$/)])
  })
  onSubmit(formdata: FormGroup){
    this._authService.verifyResetCode(formdata.value).subscribe({
      next: (resp)=>{
        if(resp.status == 'Success'){
          this._toatr.success('Reset Code Correct');
          this._Router.navigate(['/rpassword']);
        }
      }
    })
  }
}
