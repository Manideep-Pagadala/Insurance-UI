import { Component, OnInit } from '@angular/core';
import { DcService } from '../Service/dc.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  appNumber: number = 0;
  summary: any;
  income: any;
  education: any;
  kidsarray: any[] = [];
  error: string = '';

  constructor(private service: DcService, private ar: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = params['appNumber'];

      this.service.getSummary(this.appNumber).subscribe(
        (res: any) => {
          this.summary = res;
          this.income = this.summary.incomeData;
          this.appNumber = this.income.appNumber;

          this.education = this.summary.educationData;
          this.kidsarray = this.summary.kidsInfo.kids;
          console.log(this.summary);
        },
        (error: any) => {
          this.error = error;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
            timer: 1500
          });
          console.error(error);
        }
      );
    });
  }
  
  confirm() {
    this.r.navigate(['/eligibility'], {
      queryParams: {
        appNumber: this.appNumber
      }
    });
  }
}
