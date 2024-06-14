import { Component, inject } from '@angular/core'
import { ButtonComponent } from '../button/button.component'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from 'app/service/auth.service'
import { User } from 'types'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  authService = inject(AuthService)

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  login() {
    this.authService.login(this.form.value as User).subscribe()
    this.form.reset()
  }
}
