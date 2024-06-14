import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { SuccessService } from 'app/service/success.service'

@Component({
  selector: 'app-global-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-success.component.html',
})
export class GlobalSuccessComponent {
  successService = inject(SuccessService)
}
