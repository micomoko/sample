import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Projects} from  '../models/projects';

@Injectable()
export class CarouselService {

	heroCarousel: any = [];

	constructor(private projects: Projects){
		// this.getHeroCarousel();
	}

	getHeroCarousel(locationID: number){
		 return this.projects.getHeroCarousel(locationID);
	}

}

