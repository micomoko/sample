/* Angular Libs*/
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

	agent: any = {
        name: 'Jayson Monis',
        title: 'Property Investment Consultant',
        mobileNumber: '0900000000000',
        email: 'sampleEmail@gmail.com',
        facebook: '',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    };


    ngOnInit() {

    }



}
