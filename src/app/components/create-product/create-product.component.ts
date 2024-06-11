import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule],
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  form = new FormGroup({
    name: new FormControl({ value: '', disabled: false }),
  })

  submit() {
    console.log(this.form.value)
  }
}
