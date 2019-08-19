import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindingFalconeComponent } from "./finding-falcone/finding-falcone.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { FalconeFoundComponent } from './falcone-found/falcone-found.component';
import { ContactComponent } from './contact/contact.component';
import { PlanetComponent } from './planet/planet.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [AppComponent, FindingFalconeComponent, FalconeFoundComponent, ContactComponent, PlanetComponent, VehicleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
