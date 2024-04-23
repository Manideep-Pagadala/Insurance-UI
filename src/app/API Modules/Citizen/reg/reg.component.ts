import { Component } from '@angular/core';
import { CitizenDto } from '../citizen-dto';
import { CitizenService } from '../citizen.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  isSubmit: boolean = false;

  constructor(private service: CitizenService) { }

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
    console.log(dto);
    this.service.reg(dto).subscribe((response: any) => {
      console.log(response);
      alert(response);
    }, (error: any) => {
      console.error(error);
    });
  }
}
