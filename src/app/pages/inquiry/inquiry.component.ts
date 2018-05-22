/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectionUtil } from 'app/shared/redirectionUtil';
// import { PageInnerService } from './page-inner.service';

declare var $: any;


/**
 * The Home Component.
 */
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
  // providers: [PageInnerService]
})
export class InquiryComponent implements OnInit{

	
	constructor(private router: Router, private route: ActivatedRoute, private redirectionUtil: RedirectionUtil){}

	ngOnInit(){

	}


}
