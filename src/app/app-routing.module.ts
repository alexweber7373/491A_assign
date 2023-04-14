import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalFormComponent } from './total-form/total-form.component';

const routes: Routes = [ { path: 'myform', component: TotalFormComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
