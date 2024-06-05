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
  // we connect error service here in case of visualizing the error in the DOM with *ngIf
  // this service must be as public in order to use it globally
  constructor(public errorService: ErrorService) {}
}
