import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'brown';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'brown');
  }

  @HostListener('mouseenter') mouseHover(eventData: Event) {
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'brown');
    this.backgroundColor = this.defaultColor;
  }
}
