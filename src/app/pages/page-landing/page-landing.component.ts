/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * The Home Component.
 */
@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent {

	forSale: String = 'Properties for Sale';

	forRent: String = 'Properties for Rent';

}
