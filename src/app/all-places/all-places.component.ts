import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.css']
})
export class AllPlacesComponent implements OnInit {

  places: Place[] = [new Place("https://w.bookcdn.com/weather/picture/31_18068_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=199"),
                    new Place("https://w.bookcdn.com/weather/picture/31_9665_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=48960"),
                  new Place("https://w.bookcdn.com/weather/picture/31_2983_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=23398"),
                new Place("https://w.bookcdn.com/weather/picture/31_18119_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=23398"),
              new Place("https://w.bookcdn.com/weather/picture/31_34820_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=23398"),
            new Place("https://w.bookcdn.com/weather/picture/31_18815_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=23398"),
          new Place("https://w.bookcdn.com/weather/picture/31_w256092_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=&anc_id=23398"),
        ]
  constructor() { }

  ngOnInit() {
  }

  addToVisited(place) {
    let visited: Place[] = JSON.parse(localStorage.getItem("visited"));
    if (!visited) {
    visited = [];
    } 
    visited.push(place);
    localStorage.setItem("visited", JSON.stringify(visited));
  }

  addToWanted(place) {
    let wanted: Place[] = JSON.parse(localStorage.getItem("wanted"));
    if (!wanted) {
      wanted = [];
    } 
    wanted.push(place);
    localStorage.setItem("wanted", JSON.stringify(wanted));
  }
}
