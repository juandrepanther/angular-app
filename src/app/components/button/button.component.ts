import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string
  @Output() click = new EventEmitter()
  onClick() {
    this.click.emit()
  }
}
