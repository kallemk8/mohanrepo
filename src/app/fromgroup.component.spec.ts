import { TestBed } from '@angular/core/testing';
import { Fromgroup } from './Fromgroup.component';

describe('Fromgroup', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Fromgroup
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Fromgroup);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mohan'`, () => {
    const fixture = TestBed.createComponent(Fromgroup);
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('button').textContent).toEqual('Button');
  });
  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(Fromgroup);
    // get test component from the fixture
    const component = fixture.componentInstance;
    expect(component.form).toBeFalsy();
  });
  
//   it('should render title 122', () => {
//     const fixture = TestBed.createComponent(Fromgroup);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular test cases');
//   });
});