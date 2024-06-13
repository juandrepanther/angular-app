import { Component } from '@angular/core'
import { Router, RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public router: Router) {}
}
