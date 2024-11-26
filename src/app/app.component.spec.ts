import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ResultColorDirective } from './directive/result-color.directive';
import { RoundPipe } from './pipes/round.pipe';
import { InputFieldComponent } from './components/input-field/input-field.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule     
      ],
      declarations: [
        AppComponent,
        CalculatorComponent,
        InputFieldComponent, RoundPipe, ResultColorDirective
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'calculator'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('calculator');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, calculator');
  // });
});
