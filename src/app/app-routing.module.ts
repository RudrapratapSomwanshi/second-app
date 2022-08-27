import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShubhamComponent } from './shubham/shubham.component';
import { XyzComponent } from './xyz/xyz.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'shubham',component:ShubhamComponent},
  {path:'xyz',component:XyzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
