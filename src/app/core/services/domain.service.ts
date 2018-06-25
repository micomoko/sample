import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import {Projects} from  '../models/projects';

import {AmenitiesDomain} from  '../models/domain/amenities.domain';
import {FacadeDomain} from  '../models/domain/facade.domain';
import {GalleryDomain} from  '../models/domain/gallery.domain';
import {UnitPlanDomain} from  '../models/domain/unit-plan.domain';
import {LotRangeDomain} from  '../models/domain/lot-range.domain';
import {PlanTypeDomain} from  '../models/domain/plan-type.domain';
import {ConstructionDomain} from  '../models/domain/construction.domain';


import {LocationDomain} from  '../models/domain/location.domain';
import {CategoryDomain} from  '../models/domain/category.domain';



@Injectable()
export class DomainService {

	locations: any = [];
	otherLocations:  any = [];

	constructor(private projects: Projects, private amenitiesDomain: AmenitiesDomain,
		private facadeDomain: FacadeDomain, private galleryDomain: GalleryDomain,
		private constructionDomain: ConstructionDomain, private unitPlanDomain: UnitPlanDomain,
		private planTypeDomain: PlanTypeDomain, private lotRangeDomain: LotRangeDomain,
		private locationDomain: LocationDomain, private categoryDomain: CategoryDomain){
		
	}

	getLocations(){
		return this.locationDomain.getLocations();
	}

	getCategories(){
		return this.categoryDomain.getCategories();
	}

	getPropertiesByCatID(categoryID: number){

		return this.projects.getPropertiesByCatID(categoryID);

	}


	getPropertiesByCatIDAndLocID(categoryID: number, locationID: number){
		return this.projects.getPropertiesByCatIDAndLocID(categoryID, locationID);
	}


	getPropertyCount(categoryID: number, locationID: number){
		return this.projects.getPropertyCount(categoryID, locationID);
	}

}