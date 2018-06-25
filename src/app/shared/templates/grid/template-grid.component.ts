/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { DomainService } from 'app/core/services/domain.service';
import { RedirectionUtil } from 'app/shared/redirectionUtil';

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

  @Input()  locationID: number;
  @Input()  fromLanding: boolean;

  categories: any = [];
  selectedCatID: number = 1;

  properties: any = [];

  sliceCount: number = 6;


  constructor(private domainService: DomainService, private redirectionUtil: RedirectionUtil, private cdRef: ChangeDetectorRef){}


	/** Initialize Settings for Slick Slider.*/
  ngOnInit() {

    this.categories = this.domainService.getCategories();

    for(let car of this.categories){
      let temp = this.getPropertyCount(car.categoryID);
      if(temp){
        this.selectedCatID = car.categoryID;
        return false;
      }
    }
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(){
    this.toggleTabContent();
    this.populateContent();
  }

  toggleTabContent(){

    $('.tab-pane').hide();

    let idC = '#categories' + (this.selectedCatID - 1);

    this.populateContent();

    $(idC).show();

  }

  setSelectedCatID(catID: number){

    if(!catID) return;

    this.selectedCatID = catID;

    this.toggleTabContent();
  }


  getPropertyCount(catID: number){
    return this.domainService.getPropertyCount(catID, this.locationID);;
  }


  updateSliceCount(){
    this.sliceCount = this.sliceCount + 6;
  }


  private populateContent(){

    this.properties = [];
    let items: any = [];

    if(this.locationID){
      this.properties = this.domainService.getPropertiesByCatIDAndLocID(this.selectedCatID, this.locationID);
    }else{
      items = this.domainService.getPropertiesByCatID(this.selectedCatID);
      if(items && items instanceof Array &&  items.length > 0){
        this.properties = this.shuffleArray(items);
      }
    }
  }

  private shuffleArray(items: any) {
      for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]]; // eslint-disable-line no-param-reassign
      }

      return items;
  }

  redirectToInner(item: any){
    this.redirectionUtil.redirectToInner(item.locationName, item.projectName, item.projectID);
  }

}