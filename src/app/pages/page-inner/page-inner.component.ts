/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';
import { PageInnerService } from '../../core/services/page-inner.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;


/**
 * The Home Component.
 */
@Component({
  selector: 'app-page-inner',
  templateUrl: './page-inner.component.html',
  styleUrls: ['./page-inner.component.scss']
})
export class PageInnerComponent implements OnInit{

	private projectID: number;



	private paramsSub: any;

	projectDetails: any;

	amenitiesOptions = ["Amenities", "Outdoor Amenities", "Indoor Amenities", "Building Features", "Sustainable Features", "Unit Features and Provisions"];


	locationImages: any;
	gallery: any;
	amenities: any;
	facade: any;
	floorPlan: any;
	unitPlan: any;
	constructionUpdates: any;


	imageToShowModal = '';





	constructor(private router: Router, private route: ActivatedRoute, 
		private redirectionUtil: RedirectionUtil, private pageInnerService: PageInnerService,
		private sanitizer: DomSanitizer){}

	ngOnInit(){
		 this.paramsSub = this.route.params.subscribe(params => {

		 	this.projectID = params['projectID'] ? parseInt(params['projectID']) : null;

		 	if(!this.projectID) {
		 		this.redirectionUtil.navigateToHome();
		 		return;
		 	}

		 	this.getProjectDetails(this.projectID);
		 	this.getAmenities(this.projectID);
		 	this.getGallery(this.projectID);
		 	this.getFacade(this.projectID);
		 	this.getUnitPlan(this.projectID);
		 	this.getConstructionUpdates(this.projectID);
		 	this.getMapURL();


		 	
		 });
	}

	getMapURL() {
		if(!this.projectDetails.googleMap) return;

		this.projectDetails.googleMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectDetails.googleMap);
	}


	private getProjectDetails(projectID: any){
		this.projectDetails =  this.pageInnerService.getProjectDetails(projectID);
	}



	private getGallery(projectID: any){
		this.gallery = this.pageInnerService.getGallery(projectID);
	}

	private getAmenities(projectID: any){
		// this.amenities = this.pageInnerService.getAmenities(projectID);
		this.amenities =  this.pageInnerService.getAmenities(projectID);
	}

	private getFacade(projectID: any){
		this.facade = this.pageInnerService.getFacade(projectID);
	}

	private getFloorPlan(projectID: any){

	}

	private getUnitPlan(projectID: any){
		this.unitPlan = this.pageInnerService.getUnitPlan(projectID);
	}


	private getConstructionUpdates(projectID: any){
		this.constructionUpdates = this.pageInnerService.getConstructionUpdates(projectID);
	}

	showImageModal(src: string, name: string){
		this.imageToShowModal = src;
		this.toggleModal(name);
	}

	toggleModal(name: string){
		$("#imageModal" + name).modal("toggle")
	}
}
