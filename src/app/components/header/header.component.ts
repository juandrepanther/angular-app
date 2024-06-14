import { Component, inject } from '@angular/core'
import { Router, RouterLink, RouterOutlet } from '@angular/router'
import { state, trigger, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  animations: [
    trigger('openClose', [
      state(
        'home',
        style({
          backgroundColor: '#166AC1',
        }),
      ),
      state(
        'login',
        style({
          backgroundColor: 'darkgreen',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class HeaderComponent {
  router = inject(Router)
}
