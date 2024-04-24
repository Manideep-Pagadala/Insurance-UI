import { Component } from '@angular/core';
import { CitizenDto } from '../citizen-dto';
import { CitizenService } from '../citizen.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  isSubmit: boolean = false;

  constructor(private service: CitizenService, private r: Router) { }

  public registerForm: any = new FormGroup({
    citizenName: new FormControl('', [Validators.required]),
    citizenEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    ssn: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('', [Validators.required])
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

    let dto: CitizenDto = new CitizenDto(
      0,
      this.registerForm.value.citizenName,
      this.registerForm.value.citizenEmail,
      this.registerForm.value.password,
      this.registerForm.value.phone,
      this.registerForm.value.ssn,
      this.registerForm.value.gender
    );
    this.service.reg(dto).subscribe((response: any) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response,
        timer: 1500
      });
      this.r.navigate(['/appreg']);

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
