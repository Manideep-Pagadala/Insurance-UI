import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EligibiltyService } from './eligibilty.service';
import { EligDto } from './elig-dto';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-elig-det',
  templateUrl: './elig-det.component.html',
  styleUrl: './elig-det.component.css'
})
export class EligDetComponent implements OnInit {

  flag: boolean = false;
  appNumber: number=0;

  data: EligDto = new EligDto();

  constructor(private service: EligibiltyService, private ar: ActivatedRoute, private r: Router) {
  } ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = 1; 
      //+params['appNumber'];
    });
  }

  detElig() {
    this.flag = true;    
    this.service.checkEligibilty(this.appNumber).subscribe(res => {
      this.data = res;
      console.log(this.data);

    }, error => {
      console.log(error);
    })
  }
  genCorrespondence() {
    this.r.navigate(['/correspondence'], {
      queryParams: {
        appNumber: this.appNumber
      }
    });
  }


}
