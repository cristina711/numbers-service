import { Component, OnInit } from '@angular/core';
import { DataService }from '../data.service';

@Component({
  selector: 'app-thirdcomponent',
  templateUrl: './thirdcomponent.component.html',
  styleUrls: ['./thirdcomponent.component.css']
})
export class ThirdcomponentComponent implements OnInit {
  number=0

  constructor(private _dataService:DataService) { }

  ngOnInit() {
  
  }
  
 pushResult(){
   this.number = this._dataService.result()
 }
}
