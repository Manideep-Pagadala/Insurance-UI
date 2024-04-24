import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './API Modules/dashboard/dashboard.component';
import { AppRegComponent } from './API Modules/app-reg/app-reg.component';
import { BiComponent } from './API Modules/bi/bi.component';
import { ReportsComponent } from './API Modules/reports/reports.component';
import { AdminComponent } from './API Modules/admin/admin.component';
import { SidenavComponent } from './Side Nav/sidenav/sidenav.component';
import { MaterialModule } from './Angular Material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Header/header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CreateAccountComponent } from './API Modules/admin/create-account/create-account.component';
import { ViewAccountsComponent } from './API Modules/admin/view-accounts/view-accounts.component';
import { CreatePlanComponent } from './API Modules/admin/create-plan/create-plan.component';
import { ViewPlansComponent } from './API Modules/admin/view-plans/view-plans.component';
import { AdminService } from './API Modules/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { CitizenService } from './API Modules/Citizen/citizen.service';
import { LoginComponent } from './API Modules/Citizen/login/login.component';
import { RegComponent } from './API Modules/Citizen/reg/reg.component';
import { ApplicationService } from './API Modules/app-reg/application.service';
import { ViewAppsComponent } from './API Modules/app-reg/view-apps/view-apps.component';
import { DcService } from './API Modules/DC/Service/dc.service';
import { IncomeComponent } from './API Modules/DC/income/income.component';
import { EducationComponent } from './API Modules/DC/education/education.component';
import { KidsComponent } from './API Modules/DC/kids/kids.component';
import { SummaryComponent } from './API Modules/DC/summary/summary.component';
import { EligibiltyService } from './API Modules/ED/eligibilty.service';
import { EligDetComponent } from './API Modules/ED/elig-det.component';
import { CorrespondenceComponent } from './API Modules/CO/correspondence/correspondence.component';
import { PendingnoticesComponent } from './API Modules/CO/pendingnotices/pendingnotices.component';
import { HistorynoticesComponent } from './API Modules/CO/historynotices/historynotices.component';
import { CoService } from './API Modules/CO/co.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppRegComponent,
    BiComponent,
    ReportsComponent,
    AdminComponent,
    SidenavComponent,
    HeaderComponent,
    CreateAccountComponent,
    ViewAccountsComponent,
    CreatePlanComponent,
    ViewPlansComponent,
    LoginComponent,
    RegComponent,
    ViewAppsComponent,
    IncomeComponent,
    EducationComponent,
    KidsComponent,
    SummaryComponent,
    EligDetComponent,
    CorrespondenceComponent,
    PendingnoticesComponent,
    HistorynoticesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AdminService,
    CitizenService,
    ApplicationService,
    DcService,
    EligibiltyService,
    CoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
