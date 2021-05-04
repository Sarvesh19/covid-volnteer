import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-offered-help',
  templateUrl: './dashboard-offered-help.component.html',
  styleUrls: ['./dashboard-offered-help.component.css']
})
export class DashboardOfferedHelpComponent implements OnInit {
	listhelp : any;
		loading: boolean =false;
		list :any[] = [];
		isFilter: boolean = false;
		listhelpTemp: any[] = [];
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

  constructor(private router: Router, private appService: AppService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  	this.loading = true;
  	this.isFilter = false;
  	this.appService.getalloffer().subscribe((data: any)=>{
 		this.listhelp = data;
 		this.listhelpTemp = data;
 		this.loading = false;
            	console.info(data);
            },(error: any)=>{
            	console.info(error);
            });

    this.openSnackBar('Please fill ask form for help !!','Close');


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

  openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
      duration: 3000,
    });  
}

  

}
