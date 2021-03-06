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



@Injectable()
export class PageInnerService {

	locations: any = [];
	otherLocations:  any = [];

	constructor(private projects: Projects, private amenitiesDomain: AmenitiesDomain,
		private facadeDomain: FacadeDomain, private galleryDomain: GalleryDomain,
		private constructionDomain: ConstructionDomain, private unitPlanDomain: UnitPlanDomain,
		private planTypeDomain: PlanTypeDomain, private lotRangeDomain: LotRangeDomain){
		
	}

	getProjectDetails(projectID: number){

		return this.projects.getProjectDetails(projectID);
	}

	getAmenities(projectID: number){
		return this.amenitiesDomain.getAmenityById(projectID);
	}


	getGallery(projectID: number){
		return this.galleryDomain.getGalleryById(projectID);
	}	

	getFacade(projectID: number){
		return this.facadeDomain.getFacadeById(projectID);
	}

	getFloorPlan(projectID: number){

	}

	getUnitPlan(projectID: number){
		return this.unitPlanDomain.getUnitPlanById(projectID);
	}


	getConstructionUpdates(projectID: number){
		return this.constructionDomain.getConstructionById(projectID);
	}


	getLotRange(projectID: number){
		return this.lotRangeDomain.getLotRangeByID(projectID);
	}


	getPlanType(projectID: number){
		return this.planTypeDomain.getPlanTypeByID(projectID);
	}

}