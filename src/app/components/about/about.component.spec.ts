import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslocoRootModule } from "src/app/transloco-root.module";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientTestingModule, TranslocoRootModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
