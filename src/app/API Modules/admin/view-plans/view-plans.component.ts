import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { PlanDto } from '../DTOS/plan-dto';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-plans',
  templateUrl: './view-plans.component.html',
  styleUrls: ['./view-plans.component.css']
})
export class ViewPlansComponent implements OnInit {
  public plans: PlanDto[] = [];

  constructor(public ser: AdminService) { }

  ngOnInit(): void {
    this.ser.viewPlans().subscribe(res => {
      this.plans = res;
      console.log(res);
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to Fetch Plans...!',
        timer:1500
      });
    })
  }

  editPlan(i: number) {

  }
}
