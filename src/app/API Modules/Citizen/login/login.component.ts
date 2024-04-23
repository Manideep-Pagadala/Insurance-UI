import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitizenService } from '../citizen.service';
import { CitizenDto } from '../citizen-dto';
import { CitizenCredentials } from '../citizen-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmit: boolean = false;
  public dto: CitizenCredentials=new CitizenCredentials();

  constructor(public api: HttpClient, public service: CitizenService) {

  } ngOnInit(): void {
    this.service.login(this.dto).subscribe((out: any) => {
      console.log(out);
    });
  }

  public loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get con() {
    return this.loginForm.controls;
  }



}
