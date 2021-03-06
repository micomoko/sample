import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {LocationDomain} from  '../models/domain/location.domain';


@Injectable()
export class NavigationService {

	locations: any = [];
	otherLocations:  any = [];

	constructor(private locationDomain: LocationDomain){
		this.getNavigationItems();
	}

	private getNavigationItems(){
		let locList = this.locationDomain.getLocations();

		if(locList && locList.length > 5){
			this.locations = locList.splice(0, 6);
			this.otherLocations = locList;
		}else{
			this.locations = locList;
			this.otherLocations = [];
		}
	}
}