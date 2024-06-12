import { Component, input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { Product } from 'types'
import { CommonModule } from '@angular/common'
import { emptyProduct, truncateString } from 'lib/utils'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  product = input<Product>(emptyProduct)

  showDetails = false

  toggleDetails() {
    this.showDetails = !this.showDetails
  }

  truncateString = truncateString
}
