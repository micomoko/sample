import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import {Projects} from  '../models/projects';

import {AmenitiesDomain} from  '../models/domain/amenities.domain';
import {FacadeDomain} from  '../models/domain/facade.domain';
import {GalleryDomain} from  '../models/domain/gallery.domain';
import {UnitPlanDomain} from  '../models/domain/unit-plan.domain';
import {ConstructionDomain} from  '../models/domain/construction.domain';



@Injectable()
export class PageInnerService {

	locations: any = [];
	otherLocations:  any = [];

	constructor(private projects: Projects, private amenitiesDomain: AmenitiesDomain,
		private facadeDomain: FacadeDomain, private galleryDomain: GalleryDomain,
		private constructionDomain: ConstructionDomain, private unitPlanDomain: UnitPlanDomain){
		
	}

	getProjectDetails(projectID: number){

		return this.projects.getProjectDetails(projectID);




		// return {
		// 	id: 1,
		// 	projectName: "CALLISTO",
		// 	category: "Condominium",
		// 	imageLarge: 'http://www.advisacorp.com/wp-content/uploads/2017/08/Slide1.jpg',
		// 	imageMobile: 'https://www.zaliyo.in/wp-content/uploads/2016/06/300x300.gif',
		// 	description: "With successful Alveo towers in Makati such as Alveo Financial Tower in Ayala Avenue; Escala Salcedo, The Gentry Residences and The Gentry Corporate Plaza in Salcedo Village, Alveo continues its streak at Circuit Makati. ",
		// 	location: "West Gala Drive corner Theater Drive, Circuit Makati, Makati City",
		// 	locationID: 2,	
		// 	googleLocation: '',
		// 	landArea: "2,461 sq.m. | 26,490 sq.ft.",
		// 	lotRange: '',	
		// 	unitRange: [
		// 		"Studio Unit: 28-32 sq.m. | 301-344 sq.ft.",
		// 		"One-Bedroom Unit: 56-65 sq.m. | 603-700 sq.ft.",
		// 		"Two-Bedroom Unit: 85-106 sq.m. | 915-1,142 sq.ft.",
		// 		"Three-Bedroom Investor Suites: 116-122 sq.m. | 1,249-1,313 sq.ft.",
		// 		"Three-Bedroom Prime Unit: 122-214 sq.m. | 1,313-2,303 sq.ft."
		// 	],	
		// 	priceRange: "Price is available upon request.",	
		// 	logo: "https://www.alveoland.com.ph/wp-content/uploads/2017/08/Callisto-Website-Logo-180-x-110.jpg",
		// 	amenities: {
		// 		amenities :  [
		// 		,],
		// 		outdoor: [],
		// 		indoor: [],
		// 		building: [
				
		// 		],
		// 		sustainable: [
				
		// 		],
		// 		unit:[]
		// 	},
		// }

	}

	getAmenities(projectID: number){
		return this.amenitiesDomain.getAmenityById(projectID);
	}



	//Return Loc Map Image
	getLocationImages(){

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

}