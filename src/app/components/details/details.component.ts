import { Component, input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { Product } from 'types'
import { CommonModule } from '@angular/common'
import { emptyProduct, truncateString } from 'lib/utils'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, CommonModule, ButtonComponent],
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
