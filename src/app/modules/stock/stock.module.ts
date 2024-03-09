import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exemple1Component } from './exemple1/exemple1.component';
import { Exemple2Component } from './exemple2/exemple2.component';
import { Exemple3Component } from './exemple3/exemple3.component';
import { Exemple4Component } from './exemple4/exemple4.component';

@NgModule({
  declarations: [
    Exemple1Component,
    Exemple2Component,
    Exemple3Component,
    Exemple4Component
  ],
  imports: [CommonModule, StockRoutingModule, FormsModule, ReactiveFormsModule],
})
export class StockModule {}
