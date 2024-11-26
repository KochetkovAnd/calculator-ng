import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResultColor]'
})
export class ResultColorDirective implements OnChanges {

  @Input() appResultColor: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateColor();
  }

  private updateColor(): void {
    let color: string;
    if (this.appResultColor > 0) {
      color = 'green';
    } else if (this.appResultColor < 0) {
      color = 'red';
    } else {
      color = 'black';
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
