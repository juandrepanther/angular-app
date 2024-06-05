import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { RouterOutlet } from '@angular/router'
import { Product } from 'types'
import { DetailsComponent } from '../details/details.component'
import { ProductsService } from 'app/service/products.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterOutlet, DetailsComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(private productService: ProductsService) {}

  data: Product[] = []

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.data = data
    })
  }
}
