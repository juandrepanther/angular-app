import { ErrorService } from './../../service/error.service'
import { Component, inject } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ButtonComponent } from '../button/button.component'
import { AuthService } from 'app/service/auth.service'
import { User } from 'types'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  authService = inject(AuthService)
  errorService = inject(ErrorService)

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  register() {
    if (this.form.valid) {
      this.authService.register(this.form.value as User).subscribe()
      this.form.reset()
    } else {
      this.errorService.handle('Invalid form')
    }
  }
}
