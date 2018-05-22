import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectionUtil{

	constructor(private router: Router){}


	navigateToHome(){
		this.router.navigate(['']);
	}

	// LOCATION LANDING PAGE
	navigateToLanding(location: any){
		if(!location || !location.locationID) return;
		var locationName = this.constructTitle(location.locationName);
		this.router.navigate(['', locationName, location.locationID]);
	}

	// redirectToDetails(projectName: string, projectID){
	// 	if(!projectName) return;
	// 	projectName = this.constructTitle(projectName);
	// 	this.router.navigate(['details', projectName, projectID]);
	// }

	// PROPERTY DETAILS PAGE
	redirectToInner(locationName: string, projectName: string, projectID){
		if(!projectID) return;
		locationName = this.constructTitle(locationName);
		projectName = this.constructTitle(projectName);
		this.router.navigate(['', locationName, projectName, projectID]);
	}


	private constructTitle(title: string){

	if(!title) return '';

	return title.replace(/\s/g, "-");
	}

}