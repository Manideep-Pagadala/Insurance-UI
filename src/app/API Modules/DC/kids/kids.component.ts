import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KidsDto } from '../DTO/kids-dto';
import { KidsinfoDto } from '../DTO/kidsinfo-dto';
import { DcService } from '../Service/dc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  isSubmit: boolean = false;
  public appNumber: number = 0;
  kidsArray: KidsDto[] = [];

  constructor(private service: DcService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = params['appNumber'];
    });
    this.registerForm.patchValue({
      appNumber: this.appNumber
    });
    this.addKid(); 
  }

  public registerForm: any = new FormGroup({
    appNumber: new FormControl('', [Validators.required]),
  });

  get con() {
    return this.registerForm.controls;
  }

  addKid() {
    const index = this.kidsArray.length;
    this.registerForm.addControl('kidName' + index, new FormControl('', [Validators.required]));
    this.registerForm.addControl('kidDob' + index, new FormControl('', [Validators.required]));
    this.registerForm.addControl('kidSSN' + index, new FormControl('', [Validators.required]));
    this.kidsArray.push(new KidsDto(0, '', new Date, '', this.appNumber)); 
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

    const kidsData = this.kidsArray.map((kid, index) => {
      return new KidsDto(
        0,
        this.registerForm.get('kidName' + index).value,
        this.registerForm.get('kidDob' + index).value,
        this.registerForm.get('kidSSN' + index).value,
        this.appNumber
      );
    });

    const kidsInfo: KidsinfoDto = new KidsinfoDto(
      this.appNumber,
      kidsData
    );

    console.log('Kid :: ', kidsData);
    console.log('Kids :: ', kidsInfo);

    this.service.savekids(kidsInfo).subscribe(
      (response: any) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response,
          timer: 1500
        });
        console.log(response);
        this.isSubmit = false;
        this.r.navigate(['/summary'], {
          queryParams: { appNumber: this.appNumber }
        });
      },
      (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          timer: 1500
        });
        console.error(error);
      }
    );
  }
}
