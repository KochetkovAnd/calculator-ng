import { ElementRef, Renderer2 } from "@angular/core";
import { ResultColorDirective } from "./result-color.directive";


describe('ResultColorDirective', () => {

  let directive: ResultColorDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    mockElementRef = new ElementRef(document.createElement('div'));

    directive = new ResultColorDirective(mockElementRef, mockRenderer);
  });

  it('должна устанавливать цвет текста в красный, если значение меньше 0', () => {
    directive.appResultColor = -2;
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'red'
    );
  });

  it('должна устанавливать цвет текста в зеленый, если значение больше 0', () => {
    directive.appResultColor = 2;
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'green'
    );
  });

  it('должна устанавливать цвет текста в черный, если значение равно 0', () => {
    directive.appResultColor = 0;
    directive.ngOnChanges();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'background-color',
      'black'
    );
  });
});
