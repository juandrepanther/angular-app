import { CommonModule, TitleCasePipe } from '@angular/common'
import { Component, input } from '@angular/core'
import { ModalService } from 'app/service/modal.service'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TitleCasePipe, CommonModule, MatIconModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  title = input<string>()
}
