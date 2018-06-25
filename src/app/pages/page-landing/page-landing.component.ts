/* Angular Libs*/
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';

/**
 * The Home Component.
 */
@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent implements OnInit, AfterViewInit {

	forSale: String = 'Properties for Sale';

	forRent: String = 'Properties for Rent';

	private paramsSub: any;

	locationID: number;


	loadTemplate: boolean;

	constructor(private route: ActivatedRoute, private redirectionUtil: RedirectionUtil, private cdRef:ChangeDetectorRef){}


	ngOnInit(){
		this.paramsSub = this.route.params.subscribe(params => {

			this.loadTemplate = false;


		  let locationID = params['locationID'];

		  if(locationID){
		  	this.locationID = parseInt(locationID);
		  	// this.loadTemplate = true;
		  }else{
    		this.redirectionUtil.navigateToHome();
		  }
		  
		});
	}


	ngAfterViewInit(){
		
	}

	ngAfterViewChecked()
	{
	  this.loadTemplate = true;
	  this.cdRef.detectChanges();
	}
	

}
