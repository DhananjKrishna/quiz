import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GkComponent } from './gk/gk.component';
const routes: Routes = [
  {path:'gk',component:GkComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
