import { TitleCasePipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() title!: string
}
