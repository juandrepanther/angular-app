import { Routes } from '@angular/router'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  {
    path: 'products',
    title: 'Products',
    component: TasksComponent,
  },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
]
