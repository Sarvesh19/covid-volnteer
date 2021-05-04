import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { map } from "rxjs/operators"; 
import { Observable, of, Subject } from 'rxjs';

import { AppService } from '../app.service';
import { HttpClient , HttpResponse} from '@angular/common/http'; 

@Component({
  selector: 'app-seekhelp',
  templateUrl: './seekhelp.component.html',
  styleUrls: ['./seekhelp.component.scss']
})
export class SeekhelpComponent implements OnInit {

isLinear = true;
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;
  fourthFormGroup: any;
  cities: string[] = [];
  selectedCity : any;
  loading: boolean = false;
  notValidForm: boolean = false;

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

    needs : any[] = ['Oxygen', 'Plasma', 'Bed', 'Medicine', 'Food', 'Financial', 'Blood','Other'];

  constructor(private router :Router,private _formBuilder: FormBuilder, private appService: AppService,private http: HttpClient) { 
  }
  ngOnInit(): void {

  	// this.firstFormGroup = this._formBuilder.group({
      
   //  });
    this.secondFormGroup = this._formBuilder.group({
       firstCtrl: ['', Validators.required],
 		   address: ['', Validators.required],
       zip:[null, [Validators.pattern("^[0-9]*$"),Validators.min(1)]],
       cities1: [''],
       state1:['', Validators.required],
       email: ['', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
       contact:[null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(1)]],
       needs1: ['', Validators.required],
       description: ['', Validators.required]

   });

   //  this.thirdFormGroup= this._formBuilder.group({
 		
       

   // });

   //   this.fourthFormGroup= this._formBuilder.group({
 		

   // });

    


    this.http
      .get("assets/cities.json", { responseType: 'text' })
      // .pipe(map((response: any) => response.json()))
      .subscribe((data: any) => {
      	let data1:any = JSON.parse(data);
        this.cities = data1;
      });


  }

  routeHome(){
  	        this.router.navigate(['home']);

  }

  sumbittedForHelp(){
    this.notValidForm = false;
	if(this.secondFormGroup.valid){
		    let user = { name: this.secondFormGroup.value.firstCtrl
           , address: this.secondFormGroup.value.address,
			city: this.secondFormGroup.value.cities1,
			zip: this.secondFormGroup.value.zip,
			state: this.secondFormGroup.value.state1,
			mobContact: this.secondFormGroup.value.contact,
			email: this.secondFormGroup.value.email,
			listNeeds: this.secondFormGroup.value.needs1,
			description : this.secondFormGroup.value.description
            };
            this.loading = true;
            this.appService.seekHelp(user).subscribe((data: any)=>{

            	console.info(data);
            	 this.loading = false;
            	this.router.navigate(['dashboard-offered-help']);
            },(error: any)=>{
            	 this.loading = false;
            	console.info(error);
            });


        console.log("valid Form"); 

	}else {
    this.notValidForm = true;
		return;
	}
	 

  }

}
