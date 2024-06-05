import { Routes } from '@angular/router'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full',
  // },
  { path: '', title: 'Home', component: HomeComponent },
  {
    path: 'products',
    title: 'Products',
    component: TasksComponent,
  },
  { path: '**', component: PageNotFoundComponent },
]
