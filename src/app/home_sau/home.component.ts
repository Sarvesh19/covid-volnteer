import { Component, OnInit,ElementRef, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent_ implements OnInit {

  constructor(route: ActivatedRoute,private router :Router, private elementRef: ElementRef) {
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
        var v = document.createElement("script");
        v.type = "text/javascript";
        v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
        this.elementRef.nativeElement.appendChild(v);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        this.elementRef.nativeElement.appendChild(s);
    }

  dashBoard(){
        this.router.navigate(['dashboard']);

  }

  forHelpRoute(){
        this.router.navigate(['for-covidhelp']);

  }
  needHelpRoute(){
        this.router.navigate(['need-covidhelp']);

  }

  routeHome(){
  	        this.router.navigate(['home']);

  }

}
