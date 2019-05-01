import { Component } from '@angular/core';
import { PublishService } from './publish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Atelier';
  
  constructor(private publishserv: PublishService){
  }
  
  publish():void {
	  console.log("inside Appcomponent");
	  this.publishserv.CallWs();
	    
  }
}
