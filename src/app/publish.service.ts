import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardData } from './dashboard-data';


const dashboarddata = [
    {id: 1,
    name: 'salesCount',
    type: 'linegraph',
	mass:2
},
 {id: 2,
    name: 'repairCount',
    type: 'bargraph',
	mass:3
}
];

@Injectable({
  providedIn: 'root'
})
export class PublishService {  

    private list :DashboardData[] = [
  {
    "id": 10,
    "name": "Hi",
    "type": "hello",
    "mass": 249
  },
  {
    "id": 20,
    "name": "bye",
    "type": "tata",
    "mass": 320
  }]
	
	private producerUrl = 'https://my-json-server.typicode.com/karthikiniyan/MyMockRestService/posts';     
	
	dashboardData: DashboardData[];

  constructor( private http: HttpClient) { }
  
  CallWs():void {
	  
	  console.log("Going to call REST Service");
	   this.http.get<DashboardData[]>(this.producerUrl).subscribe((dash : DashboardData[]) => {
	   this.dashboardData = dash;
	   console.log(this.dashboardData);
	   }		   ); 
	 
	   console.log(this.dashboardData);
  }
}
