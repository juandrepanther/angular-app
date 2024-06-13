import { CommonModule } from '@angular/common'
import { Component, input, output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { BtnTypes } from 'types'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  text = input.required<string>()
  style = input<BtnTypes>('mat-flat-button')
  goTo = input<string>()

  buttonClick = output()

  onClick() {
    this.buttonClick.emit()
  }
}
