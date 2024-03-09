import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from './guards/check.guard';

const routes: Routes = [
  {
    path: 'stock',
    loadChildren: () =>
      import('./modules/stock/stock-routing.module').then(
        (mod) => mod.StockRoutingModule
      ),
    canMatch: [checkGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
