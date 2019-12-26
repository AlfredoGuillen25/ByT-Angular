import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home/home-list/home-list.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeListComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
