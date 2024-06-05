import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { GlobalErrorComponent } from 'app/components/global-error/global-error.component'
import { HeaderComponent } from 'app/components/header/header.component'
import { TasksComponent } from 'app/components/tasks/tasks.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TasksComponent, GlobalErrorComponent],
  templateUrl: '../root/app.component.html',
})
export class AppComponent {}
