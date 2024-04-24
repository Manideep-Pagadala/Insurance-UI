import { Component } from '@angular/core';
import { CoDto } from '../co-dto';
import { CoService } from '../co.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historynotices',
  templateUrl: './historynotices.component.html',
  styleUrl: './historynotices.component.css'
})
export class HistorynoticesComponent {
  flag: boolean = false;
  public appNumber: number = 0;
  public coData: CoDto = new CoDto();

  constructor(private service: CoService, private ar: ActivatedRoute) { }
  ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = params['appNumber']
    })

  }

  searchHistoryNotices() {
    this.flag = true;
    this.service.fetchHistoryNotices(this.appNumber).subscribe(res => {
      this.coData = res[0];
      console.log(this.coData);
    }
      , error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          timer: 1500
        });
      });
  }
}
