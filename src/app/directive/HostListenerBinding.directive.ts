import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListenerBinding]'
})
export class HostListenerBindingDirective {
  toggle = false;

  constructor() { }

  @HostBinding('style.color') color = 'red';
  // color = 'red';

  @HostListener('click') changeColor() {
    this.toggle = !this.toggle;
    if (this.toggle) this.color = 'green';
    else this.color = 'red';
  }
}
