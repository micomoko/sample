import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { CarouselService } from './services/carousel.service';
import { PageInnerService } from './services/page-inner.service';

import { AmenitiesDomain } from './models/domain/amenities.domain';
import { LocationDomain } from './models/domain/location.domain';
import { CategoryDomain } from './models/domain/category.domain';
import { GalleryDomain } from './models/domain/gallery.domain';
import { FacadeDomain } from './models/domain/facade.domain';
import { ConstructionDomain } from './models/domain/construction.domain';
import { UnitPlanDomain } from './models/domain/unit-plan.domain';
import { Projects } from './models/projects';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ // singleton services
        NavigationService,
        PageInnerService,
        CarouselService,
        LocationDomain,
        Projects,
        CategoryDomain,
        AmenitiesDomain,
        GalleryDomain,
        FacadeDomain,
        ConstructionDomain,
        UnitPlanDomain

    ],
})
export class CoreModule { }
