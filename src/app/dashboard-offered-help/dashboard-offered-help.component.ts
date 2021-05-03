import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-dashboard-offered-help',
  templateUrl: './dashboard-offered-help.component.html',
  styleUrls: ['./dashboard-offered-help.component.css']
})
export class DashboardOfferedHelpComponent implements OnInit {
	listhelp : any;
		loading: boolean =false;


  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  	this.loading = true;
  	this.appService.getalloffer().subscribe((data: any)=>{
 		this.listhelp = data;
 		this.loading = false;
            	console.info(data);
            },(error: any)=>{
            	console.info(error);
            });
  }

   routeHome(){
  	        this.router.navigate(['home']);

  }

  

}
