import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { ShubhamComponent } from './shubham/shubham.component';
const routes: Routes = [
  { path: 'xyz-component', component: XyzComponent },
  { path: 'shubham-component', component: ShubhamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
