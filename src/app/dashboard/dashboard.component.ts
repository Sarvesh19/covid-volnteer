import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	listhelp : any;
	loading: boolean =false;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  	this.loading = true;
 this.appService.getAllHelp().subscribe((data: any)=>{
 		this.listhelp = data;
 		this.loading = false;
            	console.info(data);
            },(error: any)=>{
            	this.loading = false;
            	console.info(error);
            });


  }

    routeHome(){
  	        this.router.navigate(['home']);

  }

}
