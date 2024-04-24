import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppDto } from './app-dto';
import { ApplicationService } from './application.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-app-reg',
  templateUrl: './app-reg.component.html',
  styleUrls: ['./app-reg.component.css']
})
export class AppRegComponent {
  isSubmit: boolean = false;

  constructor(private service: ApplicationService) { }

  public registerForm: any = new FormGroup({
    citizenName: new FormControl('', [Validators.required]),
    gmail: new FormControl('', [Validators.required, Validators.email]),
    ssn: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('', [Validators.required]),
    planId: new FormControl('', [Validators.required]),
    citizenId: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  });

  get con() {
    return this.registerForm.controls;
  }

  register() {
    this.isSubmit = true;

    if (this.registerForm.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Your Details...",
        timer: 1500
      });
      return;
    }

    let dto: AppDto = new AppDto(
      0,
      this.registerForm.value.citizenName,
      this.registerForm.value.dob,
      this.registerForm.value.gender,
      this.registerForm.value.gmail,
      this.registerForm.value.ssn,
      this.registerForm.value.planId,
      this.registerForm.value.citizenId,
      new Date(),
      null
    );
    this.service.reg(dto).subscribe((response: any) => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response,
        timer: 1500
      });
      this.registerForm.reset();
      this.isSubmit = false;
    }, (error: any) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
        timer: 1500
      });
      console.error(error);
    });
  }
}
