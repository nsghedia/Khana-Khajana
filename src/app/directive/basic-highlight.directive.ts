import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {

  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.ele.nativeElement,'background-color','brown');
  }

  @HostListener('mouseenter') mouseHover(eventData:Event){
    this.renderer.setStyle(this.ele.nativeElement,'background-color','blue');
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    this.renderer.setStyle(this.ele.nativeElement,'background-color','brown');
  }

}
