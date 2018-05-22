/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'template-grid',
  templateUrl: './template-grid.component.html',
  styleUrls: ['./template-grid.component.scss']
})
export class TemplateGridComponent implements OnInit{

	@Input() locatioName: string = '';

  @Input()  locationID: number;

  @Input() selectedValue: any;

  // numberOfPages
  // currentPageNumber

	items: any = [
		{
			id: 1,
			title: 'Kroma Tower',
			description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
			location: 'Dela Rosa Street, Makati City',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			image: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540'
		},
		{
			id: 2,
			title: 'Montala',
			description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
			location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
			image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
		},
		{
			id: 3,
			title: 'Title 3 Longer and Longer and Longer',
			description: 'Description 3',
			location: 'Location 3',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
			image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
		},
		{
			id: 4,
			title: 'Title 4',
			description: 'Description 4',
			location: 'Location 4',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
			image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
		},
		{
			id: 5,
			title: 'Title 5',
			description: 'Description 5',
			location: 'Location 5',
			// image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
			category: 'Condominium',
			// logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
			image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
		},
    {
      id: 11,
      title: 'Kroma Tower',
      description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
      location: 'Dela Rosa Street, Makati City',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540'
    },
    {
      id: 12,
      title: 'Montala',
      description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
      location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 13,
      title: 'Title 3 Longer and Longer and Longer',
      description: 'Description 3',
      location: 'Location 3',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
    {
      id: 14,
      title: 'Title 4',
      description: 'Description 4',
      location: 'Location 4',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 15,
      title: 'Title 5',
      description: 'Description 5',
      location: 'Location 5',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
    {
      id: 21,
      title: 'Kroma Tower',
      description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
      location: 'Dela Rosa Street, Makati City',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540'
    },
    {
      id: 22,
      title: 'Montala',
      description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
      location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 23,
      title: 'Title 3 Longer and Longer and Longer',
      description: 'Description 3',
      location: 'Location 3',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
    {
      id: 24,
      title: 'Title 4',
      description: 'Description 4',
      location: 'Location 4',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 25,
      title: 'Title 5',
      description: 'Description 5',
      location: 'Location 5',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
    {
      id: 31,
      title: 'Kroma Tower',
      description: 'Kroma Tower moves you closer to superlative metro living in the Makati Central Business District.',
      location: 'Dela Rosa Street, Makati City',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/1000-BUILDING.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16718/the-gentry-residences-makati-condo-thumbnail-min_thumb.jpg?cb=1496041540'
    },
    {
      id: 32,
      title: 'Montala',
      description: 'Montala is a picturesque mountainside community in Pampanga. It\'s an exciting haven with an array of modern-day conveniences, fit for the eco-active lifestyle.',
      location: 'Alviera, Brgys., Hacienda Dolores and Banaba, Porac, Pampanga',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/gallery5-min-17.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/BbcTMbIKW0BAPbHF0-min.jpg',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 33,
      title: 'Title 3 Longer and Longer and Longer',
      description: 'Description 3',
      location: 'Location 3',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/MG_3791-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/194-patio-suites-logo-jpeg-min.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
    {
      id: 34,
      title: 'Title 4',
      description: 'Description 4',
      location: 'Location 4',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/verdana-homes-1.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2018/01/071217-OREAN-Tower-1_Full-color-Logo_FA.png',
      image: 'http://www.atayala.com/uploads/images/1900/Ayala_thumb.jpg?cb=1481092706'
    },
    {
      id: 35,
      title: 'Title 5',
      description: 'Description 5',
      location: 'Location 5',
      // image: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/AR-Lobby-1-min.jpg',
      category: 'Condominium',
      // logo: 'https://www.alveoland.com.ph/wp-content/uploads/2017/08/portico-website-logo.jpg',
      image: 'http://www.atayala.com/uploads/images/16776/the-sandstone-at-portico-condo-pasig-thumbnail-min_thumb.jpg?cb=1496726711'
    },
		

	];

	/** Initialize Settings for Slick Slider.*/
    ngOnInit() {



}

    redirectToInner(item: any){
    	console.log(item.title);
    	console.log(item.title);

    }

}
