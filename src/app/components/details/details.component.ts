import { Component, input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { Product } from 'types'
import { CommonModule } from '@angular/common'
import { emptyProduct, truncateString } from 'lib/utils'
import { ButtonComponent } from '../button/button.component'
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, CommonModule, ButtonComponent],
  templateUrl: './details.component.html',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DetailsComponent {
  product = input<Product>(emptyProduct)

  showDetails = false

  toggleDetails() {
    this.showDetails = !this.showDetails
  }

  truncateString = truncateString
}
