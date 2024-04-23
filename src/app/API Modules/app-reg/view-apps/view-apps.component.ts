import { Component } from '@angular/core';
import { ApplicationService } from '../application.service';
import { AppDto } from '../app-dto';

@Component({
  selector: 'app-view-apps',
  templateUrl: './view-apps.component.html',
  styleUrl: './view-apps.component.css'
})
export class ViewAppsComponent {

  public apps: AppDto[] = [];
  constructor(public ser: ApplicationService) { }

  ngOnInit(): void {
    this.ser.getAllApps().subscribe(res => {
      this.apps = res;
      console.log(res);
    })
  }
}
