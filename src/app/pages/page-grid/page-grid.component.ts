/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * The Home Component.
 */
@Component({
  selector: 'app-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrls: ['./page-grid.component.css']
})
export class PageGridComponent {

	forSale: String = 'Properties for Sale';

	forRent: String = 'Properties for Rent';

}
