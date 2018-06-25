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

	displayVideo: boolean = true;

	projectDetails: any;

	amenitiesOptions = ["Amenities", "Outdoor Amenities", "Indoor Amenities", "Building Features", "Sustainable Features", "Unit Features and Provisions"];


	locationImages: any;
	gallery: any;
	amenities: any;
	facade: any;
	floorPlan: any;
	unitPlan: any;
	constructionUpdates: any;
	lotRange: any;
	planType: any;


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

		 	this.getProjectDetails();

		 	if(this.projectDetails){
				this.getAmenities();
				this.getMapURL();
				this.getVideoURL();
			 	this.getGallery();
			 	this.getFacade();
			 	this.getUnitPlan();
			 	this.getLotRange();
			 	this.getPlanType();
			 	this.getConstructionUpdates();
			 	
		 	}else{
		 		console.log("WHAT");
		 	}
		 	


		 	
		 });
	}

	getMapURL() {
		if(!this.projectDetails.googleMap) return;

		this.projectDetails.googleMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectDetails.googleMap);
	}

	getVideoURL() {
		if(!this.projectDetails.video) return;

		this.projectDetails.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectDetails.video);
	}


	private getProjectDetails(){
		this.projectDetails =  this.pageInnerService.getProjectDetails(this.projectID);
	}



	private getGallery(){
		this.gallery = this.pageInnerService.getGallery(this.projectID);
	}

	private getAmenities(){
		this.amenities =  this.pageInnerService.getAmenities(this.projectID);
	}

	private getFacade(){
		this.facade = this.pageInnerService.getFacade(this.projectID);
	}

	private getFloorPlan(){

	}

	private getUnitPlan(){
		this.unitPlan = this.pageInnerService.getUnitPlan(this.projectID);
	}


	private getConstructionUpdates(){
		this.constructionUpdates = this.pageInnerService.getConstructionUpdates(this.projectID);
	}


	private getLotRange(){
		this.lotRange = this.pageInnerService.getLotRange(this.projectID);
	}

	private getPlanType(){
		this.planType = this.pageInnerService.getPlanType(this.projectID);
	}

	showImageModal(src: string, name: string){
		this.imageToShowModal = src;
		this.toggleModal(name);
	}

	toggleModal(name: string){
		$("#imageModal" + name).modal("toggle")
	}

	closeVideo(){
		this.displayVideo = false;
	}
}
