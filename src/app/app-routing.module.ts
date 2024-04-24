import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './API Modules/dashboard/dashboard.component';
import { AppRegComponent } from './API Modules/app-reg/app-reg.component';
import { AdminComponent } from './API Modules/admin/admin.component';
import { BiComponent } from './API Modules/bi/bi.component';
import { ReportsComponent } from './API Modules/reports/reports.component';
import { ViewPlansComponent } from './API Modules/admin/view-plans/view-plans.component';
import { ViewAccountsComponent } from './API Modules/admin/view-accounts/view-accounts.component';
import { LoginComponent } from './API Modules/Citizen/login/login.component';
import { RegComponent } from './API Modules/Citizen/reg/reg.component';
import { ViewAppsComponent } from './API Modules/app-reg/view-apps/view-apps.component';
import { IncomeComponent } from './API Modules/DC/income/income.component';
import { EducationComponent } from './API Modules/DC/education/education.component';
import { KidsComponent } from './API Modules/DC/kids/kids.component';
import { SummaryComponent } from './API Modules/DC/summary/summary.component';
import { EligDetComponent } from './API Modules/ED/elig-det.component';
import { CorrespondenceComponent } from './API Modules/CO/correspondence/correspondence.component';
import { PendingnoticesComponent } from './API Modules/CO/pendingnotices/pendingnotices.component';
import { HistorynoticesComponent } from './API Modules/CO/historynotices/historynotices.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "reg",
    component: RegComponent
  },
  {
    path: "appreg",
    component: AppRegComponent
  },
  {
    path: "viewapps",
    component: ViewAppsComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "viewplans",
    component: ViewPlansComponent
  },
  {
    path: "viewacc",
    component: ViewAccountsComponent
  },
  {
    path: "income",
    component: IncomeComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "kids",
    component: KidsComponent
  },
  {
    path: "summary",
    component: SummaryComponent
  },
  {
    path: "eligibility",
    component: EligDetComponent
  },
  {
    path: "correspondence",
    component: CorrespondenceComponent
  }, {
    path: "pendingnotices",
    component: PendingnoticesComponent
  }, {
    path: "historynotices",
    component: HistorynoticesComponent
  },
  {
    path: "bi",
    component: BiComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "**",
    component: DashboardComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
