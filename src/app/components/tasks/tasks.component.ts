import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { RouterOutlet } from '@angular/router'
import { Product } from 'types'
import { DetailsComponent } from '../details/details.component'
import { ProductsService } from 'app/service/products.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterOutlet, DetailsComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(private productService: ProductsService) {
    this.data$ = this.productService.getProducts()
  }
  data$: Observable<Product[]>
}
