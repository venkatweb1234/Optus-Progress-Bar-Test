import { Component, OnInit } from '@angular/core';
import {BarService} from './components/service';
import { IResults } from './interface/results';

//Component Declarartion for Selector and Directives.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BarService]
})
//Angular calls this method once it initializes child components and the current component implenets the OnInit.
export class AppComponent implements OnInit {
  Result:IResults[];
  width:number=0;
  constructor(private _barService: BarService){}
  //A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 
  //Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit()
  {
    //angular subscribe is used with Observable, here you can find all the information
   this._barService.getService()
       .subscribe((serviceData)=>this.Result=serviceData);
  }

  // The following snippet shows how a component can implement this interface to define its own initialization method for extra Events
 public addWidth(event)
  {
    this.width=this.width+(Number(event.target.attributes.value.nodeValue));
    
  }
  //The following snippet shows how a component can implement this interface to define its own initialization method for Events
  public addEvent(event)
  {
    var e=event.value+'%';
  }
}
