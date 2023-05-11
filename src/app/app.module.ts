import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { TranslocoRootModule } from "./transloco-root.module";

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000"
    }),
    TranslocoRootModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SsrCookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
