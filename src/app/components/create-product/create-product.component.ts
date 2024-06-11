import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {}
