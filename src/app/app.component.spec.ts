import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbdTableComplete } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NgbdTableComplete
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgbdTableComplete);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'report'`, () => {
    const fixture = TestBed.createComponent(NgbdTableComplete);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('report');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NgbdTableComplete);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('report app is running!');
  });
});
