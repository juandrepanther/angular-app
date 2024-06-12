import { Directive, ElementRef, OnInit } from '@angular/core'

// just simply add this directive appFocus to the element you want to focus by default

@Directive({
  selector: '[appFocus]',
  standalone: true,
})
export class FocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // we can control the focus here
    this.el.nativeElement.focus()
  }
}
