import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
// import { MatButtonModule } from '@angular/material/button'
import { RouterOutlet } from '@angular/router'
import { Product } from 'types'
import { DetailsComponent } from '../details/details.component'
import { ProductsService } from 'app/service/products.service'
import { Observable } from 'rxjs'
import { SearchProductsPipe } from 'app/pipes/search-products.pipe'
import { ModalService } from 'app/service/modal.service'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    // MatButtonModule,
    RouterOutlet,
    DetailsComponent,
    FormsModule,
    SearchProductsPipe,
    ButtonComponent,
  ],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(
    private productService: ProductsService,
    public modalService: ModalService,
  ) {
    this.data$ = this.productService.getProducts()
  }
  data$: Observable<Product[]>

  search = ''

  goToHome() {
    window.location.href = '/'
  }
}
