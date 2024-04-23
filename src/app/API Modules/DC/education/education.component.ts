import { Component, OnInit } from '@angular/core';
import { EducationDto } from '../DTO/education-dto';
import { DcService } from '../Service/dc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  isSubmit: boolean = false;
  public appNumber: number = 0;

  constructor(private service: DcService, private r: Router, private ar: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = params['appNumber']
      this.registerForm.patchValue({
        appNumber: this.appNumber
      });
    });
  }

  public registerForm: any = new FormGroup({
    appNumber: new FormControl('', [Validators.required]),
    highestDegree: new FormControl('', [Validators.required]),
    graduationYear: new FormControl('', [Validators.required]),
    universityName: new FormControl('', [Validators.required])
  });

  get con() {
    return this.registerForm.controls;
  }

  register() {
    this.isSubmit = true;
    if (this.registerForm.invalid)
      return;

    let dto: EducationDto = new EducationDto(
      0,
      this.registerForm.value.highestDegree,
      this.registerForm.value.graduationYear,
      this.registerForm.value.universityName,
      this.registerForm.value.appNumber
    );

    console.log(dto);

    this.service.saveEducation(dto).subscribe((response: any) => {
      alert(response);
      console.log(response)
      this.registerForm.reset();
      this.isSubmit = false;

      this.r.navigate(['/kids'], {
        queryParams: { appNumber: this.appNumber, }
      });
    }, (error: any) => {
      console.error(error);
    });

  }
}
