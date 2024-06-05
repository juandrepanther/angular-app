import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { RouterOutlet } from '@angular/router'
import { Product } from 'types'
import { environment } from 'environments/environment.development'
import { DetailsComponent } from '../details/details.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterOutlet, DetailsComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent<T extends Product> {
  httpClient = inject(HttpClient)
  data: T[] = []

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.httpClient.get<T[]>(environment.FAKE_API_URL).subscribe((data) => {
      this.data = data
      console.log(data)
    })
  }
}
