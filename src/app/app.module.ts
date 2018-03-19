import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllPlacesComponent } from './all-places/all-places.component';
import { VisitedPalcesComponent } from './visited-palces/visited-palces.component';
import { WantedPlacesComponent } from './wanted-places/wanted-places.component';
import { PlaceItemComponent } from './place-item/place-item.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AllPlacesComponent,
    VisitedPalcesComponent,
    WantedPlacesComponent,
    PlaceItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
