import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from 'app/components/header/header.component'
import { TasksComponent } from 'app/components/tasks/tasks.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TasksComponent],
  templateUrl: '../root/app.component.html',
  styleUrl: '../root/app.component.scss',
})
export class AppComponent {}
