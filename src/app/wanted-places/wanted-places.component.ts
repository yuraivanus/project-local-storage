import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-wanted-places',
  templateUrl: './wanted-places.component.html',
  styleUrls: ['./wanted-places.component.css']
})
export class WantedPlacesComponent implements OnInit {

  places : Place[];
  constructor() { }

  ngOnInit() {
    this.places = JSON.parse(localStorage.getItem("wanted"));
  }

}
