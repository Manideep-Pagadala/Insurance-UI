import { Component, OnInit } from '@angular/core';
import { CoService } from '../co.service';
import { ActivatedRoute } from '@angular/router';
import { CoDto } from '../co-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pendingnotices',
  templateUrl: './pendingnotices.component.html',
  styleUrls: ['./pendingnotices.component.css']
})
export class PendingnoticesComponent {
  flag: boolean = false;
  public appNumber: number = 1;
  public coData: CoDto = new CoDto();

  constructor(private service: CoService, private ar: ActivatedRoute) { }


  searchPendingNotices() {
    this.flag = true;
    this.service.fetchPendingNotices(this.appNumber).subscribe(res => {
      this.coData = res[0];
      console.log(this.coData);

      if (this.coData === undefined) {
        Swal.fire({
          icon: 'info',
          title: 'Status',
          html: '<div class=" text-danger" >No Pending Notices...!<br><br></div>Check in History..',
        });
      }
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: 'Failed to Fetch Notices..! <br>'+error.message,
        timer: 1500
      });
    });
  }

  generateNotice() {
    this.service.printNotice(this.appNumber).subscribe(response => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response,
        timer: 1500
      });
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        timer: 1500
      });
    });
  }


}
