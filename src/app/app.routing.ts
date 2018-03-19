import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AllPlacesComponent } from './all-places/all-places.component';
import { WantedPlacesComponent } from './wanted-places/wanted-places.component';
import { VisitedPalcesComponent } from './visited-palces/visited-palces.component';


const appRoutes: Routes = [
  { path: 'all', component: AllPlacesComponent },
  { path: 'wanted', component: WantedPlacesComponent },
  { path: 'visited', component: VisitedPalcesComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }