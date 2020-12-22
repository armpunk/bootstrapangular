import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { title: 'Heroes List' }
  },
  { 
    path: 'home', 
    component: HomeComponent ,
    data: { title: 'Heroes List' }
  },
  { 
    path: 'table', 
    component: TableComponent,
    data: { title: 'Table' }
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
