import { Component } from '@angular/core';
import { EligDto } from '../../elig-det/elig-dto';
import { CoService } from '../co.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrl: './correspondence.component.css'
})
export class CorrespondenceComponent {

  flag: boolean = false;
  appNumber: number = 1;

  data: EligDto = new EligDto();

  constructor(private service: CoService, private ar: ActivatedRoute, private r: Router) {
  } ngOnInit(): void {
    this.ar.queryParams.subscribe(params => {
      this.appNumber = 1; //+params['appNumber'];
    });
  }

}
