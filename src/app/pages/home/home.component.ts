/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * The Home Component.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	forSale: String = 'Properties for Sale';

	forRent: String = 'Properties for Rent';

}
