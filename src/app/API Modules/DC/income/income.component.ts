import { Component } from '@angular/core';
import { DcService } from '../Service/dc.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeDto } from '../DTO/income-dto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  isSubmit: boolean = false;

  constructor(private service: DcService, private r: Router) { }

  public registerForm: any = new FormGroup({
    appNumber: new FormControl('', [Validators.required]),
    salaryIncome: new FormControl('', [Validators.required]),
    propertyIncome: new FormControl('', [Validators.required])

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

    let dto: IncomeDto = new IncomeDto(
      0,
      this.registerForm.value.salaryIncome,
      this.registerForm.value.propertyIncome,
      this.registerForm.value.appNumber
    );

    console.log(dto);

    this.service.saveIncome(dto).subscribe((response: any) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response,
        timer: 1500
      });
      console.log(response)
      this.registerForm.reset();
      this.isSubmit = false;
      this.r.navigate(['/education'], {
        queryParams: { appNumber: dto.getAppNumber() }
      });
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
