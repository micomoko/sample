/* Angular Libs*/
import { NgModule, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, RouterLink, RouterModule  } from '@angular/router';

import { RedirectionUtil } from 'app/shared/redirectionUtil';
import { NavigationService } from 'app/core/services/navigation.service';

declare var $: any;

/**
 * The Main-Carouse; Component.
 */
@Component({
  selector: 'header-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{


    private prevScrollpos: any;

	agent: any = {
        name: 'Jayson Monis',
        title: 'Property Investment Consultant',
        mobileNumber: '0900000000000',
        email: 'sampleEmail@gmail.com',
        facebook: '',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    };


	constructor(private redirectionUtil: RedirectionUtil,private router: Router, private navigationService: NavigationService, private renderer: Renderer2){

	}

    ngOnInit() {

    	$(document).ready(function() {
    		$(".nav-link").on("click", function() {
				$(".nav-link").removeClass("active");
				$(this).addClass("active");
			});
    	});

        this.prevScrollpos = window.pageYOffset;

        this.onScrollListener();
		

    }

    navigateToLanding(location: any){
    	this.redirectionUtil.navigateToLanding(location);
    }

    navigateToHome(){
    	$(".nav-link").removeClass("active");
    	this.redirectionUtil.navigateToHome();
    }
    
    onScrollListener(){
        this.renderer.listen(window, 'scroll', (event) => {
            this.onScroll(event);
        });
    }

    onScroll(event: any){

        var currentScrollPos = window.pageYOffset;
          if (this.prevScrollpos > currentScrollPos) {
            $("#navbar").css("top", 0);
          } else {
            $("#navbar").css("top", -100);
          }
          this.prevScrollpos = currentScrollPos;
    }
}
