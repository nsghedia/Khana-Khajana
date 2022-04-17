import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-HostListenerHostBinding',
  templateUrl: './HostListenerHostBinding.component.html',
  styleUrls: ['./HostListenerHostBinding.component.css'],
})
export class HostListenerHostBindingComponent implements OnInit {
  // checked = false;
  toggle = false;

  constructor(private ele: ElementRef) {}

  ngOnInit() {
    this.ele.nativeElement.style.color = 'green';
  }

  toggleCheck() {
    this.checked = !this.checked;
  }

  @HostBinding('attr.checked') checked = false;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        this.toggleCheck();
        break;
    }
  }


}
