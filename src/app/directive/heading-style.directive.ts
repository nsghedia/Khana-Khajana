import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeadingStyle]'
})
export class HeadingStyleDirective implements OnInit{

  constructor(private ele: ElementRef) { }

  ngOnInit(){
    this.ele.nativeElement.style.color = 'white';
    this.ele.nativeElement.style.backgroundColor = 'brown';
  }

}
