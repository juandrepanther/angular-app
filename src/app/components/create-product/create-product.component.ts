import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  submit() {
    console.log(this.form.value)
  }
}
