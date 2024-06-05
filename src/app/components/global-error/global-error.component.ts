import { Component } from '@angular/core'
import { ErrorService } from 'app/service/error.service'
import { AsyncPipe, CommonModule } from '@angular/common'

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent {
  constructor(public errorService: ErrorService) {}
}
