// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { RouterLink, provideRouter } from '@angular/router';
// import { NavComponent } from './nav.component';
// import { TranslocoService } from '@ngneat/transloco';

// describe('NavComponent', () => {
//   let component: NavComponent;
//   let fixture: ComponentFixture<NavComponent>;
//   let service: TranslocoService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [],
//       providers: [provideRouter([]), TranslocoService],
//       declarations: [NavComponent]
//     }).compileComponents();
//     service = TestBed.inject(TranslocoService);

//     fixture = TestBed.createComponent(NavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the app', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have the correct menu items', () => {
//     const linkItems = fixture.debugElement.queryAll(By.directive(RouterLink));
//     const navItems = linkItems.map((it) => it.injector.get(RouterLink));

//     expect(navItems.length).toBe(3);
//     expect(navItems[0].href).toBe('/');
//     expect(navItems[1].href).toBe('/about');
//     expect(navItems[2].href).toBe('/contact');
//   });
// });
