import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTranslocoModule } from './../../transloco-testing.module';
import { ContactComponent } from './contact.component';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [HttpClientTestingModule, getTranslocoModule()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display "App by" in English', () => {
  //   const byElement = fixture.debugElement.query(By.css('.contact-by')).nativeElement;
  //   console.log(byElement.textContent);
  //   expect(byElement.textContent.trim()).toBe('App by');
  // });
});
