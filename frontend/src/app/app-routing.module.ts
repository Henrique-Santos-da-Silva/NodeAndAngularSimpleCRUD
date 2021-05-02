import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TelephonebookFormComponent} from './telephonebook-form/telephonebook-form.component';
import {TelephoneGuard} from './guard/telephone.guard';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'newTelephone', component: TelephonebookFormComponent, resolve: {telephone: TelephoneGuard}},
  {path: 'editTelephone/:id', component: TelephonebookFormComponent, resolve: {telephone: TelephoneGuard}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
