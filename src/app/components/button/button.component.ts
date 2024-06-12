import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string
  @Output() buttonCLick = new EventEmitter()
  onClick() {
    this.buttonCLick.emit()
  }
}
