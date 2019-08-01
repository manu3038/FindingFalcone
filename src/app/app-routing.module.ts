import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindingFalconeComponent } from "./finding-falcone/finding-falcone.component";
import { FalconeFoundComponent } from "./falcone-found/falcone-found.component";
import { ContactComponent } from "./contact/contact.component";


const routes: Routes = [
  {
    path : '', component : FindingFalconeComponent,
  },
  {
    path : 'falcone-result', component : FalconeFoundComponent
  },
  {
    path : 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
