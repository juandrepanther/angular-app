import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ButtonComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
