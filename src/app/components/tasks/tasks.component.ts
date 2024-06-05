import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { RouterOutlet } from '@angular/router'
import { Product } from 'types'
import { DetailsComponent } from '../details/details.component'
import { ProductsService } from 'app/service/products.service'
import { Observable } from 'rxjs'
import { SearchProductsPipe } from 'app/pipes/search-products.pipe'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterOutlet,
    DetailsComponent,
    FormsModule,
    SearchProductsPipe,
  ],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(private productService: ProductsService) {
    this.data$ = this.productService.getProducts()
  }
  data$: Observable<Product[]>

  search = ''
}
