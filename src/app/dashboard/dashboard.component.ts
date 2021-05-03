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
	isFilter: boolean = false;
		listhelpTemp: any[] = [];
				list :any[] = [];
				states : any[] = [
   "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"]


  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  	this.loading = true;
 this.appService.getAllHelp().subscribe((data: any)=>{
 		this.listhelp = data;
 		 		this.listhelpTemp = data;

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

  selected(event : any){
  	this.isFilter = true;
  	 this.list = this.listhelp
                                .filter((help: any) => help.state === event.value);
    this.listhelpTemp = this.list; 
  	console.info(event.value);
  }
  callNow(mobile: any){
  	window.open('tel:'+mobile);

  }

}
