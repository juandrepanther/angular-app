import { Component } from '@angular/core'
import { ButtonComponent } from '../button/button.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
