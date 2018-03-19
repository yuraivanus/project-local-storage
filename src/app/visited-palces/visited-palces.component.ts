import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-visited-palces',
  templateUrl: './visited-palces.component.html',
  styleUrls: ['./visited-palces.component.css']
})
export class VisitedPalcesComponent implements OnInit {

  places : Place[];
  constructor() { }

  

  ngOnInit() { 
    this.places = JSON.parse(localStorage.getItem("visited"));
  }

}
