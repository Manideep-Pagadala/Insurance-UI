import { Component, OnInit } from '@angular/core';
import { CoService } from '../co.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EligDto } from '../../ED/elig-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrl: './correspondence.component.css'
})
export class CorrespondenceComponent implements OnInit {
  appNumber: number = 0;
  appdata: EligDto = new EligDto();
  constructor(private service: CoService, private r: Router, private ar: ActivatedRoute) {

  } ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = params['appNumber'];

      this.appdata = JSON.parse(params['appdata']) as EligDto;
      console.log(this.appNumber);
      console.log(this.appdata);
    })
  }
  generateNotice() {
    this.service.printNotice(this.appNumber).subscribe(res => {
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: res,
        timer: 1500
      });
      this.r.navigate(['/historynotices'], {
        queryParams: {
          appNumber: this.appNumber
        }
      });
    },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          timer: 1500
        });
      });
  }

}
