import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verfy-email',
  standalone: true,
  imports: [],
  templateUrl: './verfy-email.component.html',
  styleUrl: './verfy-email.component.scss'
})
export class VerfyEmailComponent {
  constructor(private _AuthService: AuthService, private _toastr: ToastrService){

  }

  formEmail: FormGroup = new FormGroup({
    email: new FormControl(null)
  })
  onVerfiy(){
    
  }

}
