import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './templates/carousel/main-carousel/main-carousel.component';
import { SyncCarouselComponent } from './templates/carousel/sync-carousel/sync-carousel.component';
import { PortraitCarouselComponent } from './templates/carousel/portrait-carousel/portrait-carousel.component';
import { PreviewCarouselComponent } from './templates/carousel/preview-carousel/preview-carousel.component';
import { PreviewModalComponent } from './templates/modals/preview-modal/preview-modal.component';
import { TemplateGridComponent } from './templates/grid/template-grid.component';
import { InnerCarouselComponent } from './templates/carousel/inner-carousel/inner-carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RedirectionUtil } from './redirectionUtil';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule      
  ],
  declarations: [
    MainCarouselComponent,
    SyncCarouselComponent,
    PortraitCarouselComponent,
    InnerCarouselComponent,
    FooterComponent,
    NavigationComponent,
    TemplateGridComponent,
    PreviewCarouselComponent,
    PreviewModalComponent,
    TruncatePipe
  ],
  providers: [
    RedirectionUtil
  ],
  exports: [
    MainCarouselComponent,
    SyncCarouselComponent,
    PortraitCarouselComponent,
    PreviewCarouselComponent,
    PreviewModalComponent,
    InnerCarouselComponent,
    FooterComponent,
    NavigationComponent,
    TemplateGridComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
