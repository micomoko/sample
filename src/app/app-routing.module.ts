import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PageInnerComponent } from './pages/page-inner/page-inner.component';
import { PageGridComponent } from './pages/page-grid/page-grid.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inquire', component: InquiryComponent },
  { path: ':locationName/:locationID', component: PageLandingComponent },
  { path: ':locationName/:projectName/:projectID', component: PageInnerComponent },
  { path: 'properties', component: PageGridComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
