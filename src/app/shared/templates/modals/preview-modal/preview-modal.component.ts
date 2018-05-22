/* Angular Libs*/
import { Component, Input, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewModalComponent implements OnInit{

	@Input() projectName: string;
  @Input() image: string ;
  @Input() name: string;

	/** Initialize Settings for Slick Slider.*/
  ngOnInit() {

 
  }

  toggleModal(){
    console.log("#imageModal" + this.name);
    $("#imageModal" + this.name).modal("toggle")
  }
}
