import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { Product } from 'types'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() product!: Product

  showDetails = false

  toggleDetails() {
    this.showDetails = !this.showDetails
  }
}
