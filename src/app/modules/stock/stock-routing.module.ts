import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exemple1Component } from './exemple1/exemple1.component';
import { Exemple2Component } from './exemple2/exemple2.component';
import { Exemple3Component } from './exemple3/exemple3.component';
import { Exemple4Component } from './exemple4/exemple4.component';

const routes: Routes = [
  { path: 'exemple1', component: Exemple1Component },
  { path: 'exemple2', component: Exemple2Component },
  { path: 'exemple3', component: Exemple3Component },
  { path: 'exemple4', component: Exemple4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
