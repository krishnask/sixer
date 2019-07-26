import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SxrAuthComponent } from './sxr-auth/sxr-auth.component';

const routes: Routes = [
  {path: '', component: SxrAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
