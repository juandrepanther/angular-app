import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CreateProductComponent } from 'app/components/create-product/create-product.component'
import { GlobalErrorComponent } from 'app/components/global-error/global-error.component'
import { GlobalSuccessComponent } from 'app/components/global-success/global-success.component'
import { HeaderComponent } from 'app/components/header/header.component'
import { ModalComponent } from 'app/components/modal/modal.component'
import { TasksComponent } from 'app/components/tasks/tasks.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TasksComponent,
    GlobalErrorComponent,
    ModalComponent,
    CreateProductComponent,
    GlobalSuccessComponent,
  ],
  templateUrl: '../root/app.component.html',
})
export class AppComponent {}
