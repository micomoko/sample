import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageInnerComponent } from './page-inner/page-inner.component';
import { PageGridComponent } from './page-grid/page-grid.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
  	SharedModule,
  	CommonModule
  ],
  declarations: [
  	HomeComponent,
  	PageLandingComponent,
  	PageInnerComponent,
  	PageGridComponent,
    InquiryComponent
    ]
})
export class PagesModule { }
