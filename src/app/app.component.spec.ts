import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [
        AppComponent
      ],

      imports: [
        RouterTestingModule,
        DashboardModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
