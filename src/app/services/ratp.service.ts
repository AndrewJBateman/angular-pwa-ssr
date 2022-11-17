import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { SsrCookieService } from "ngx-cookie-service-ssr";

import { RatpResponse } from "../models/ratp";

const baseUrl = "https://data.ratp.fr/api/records/1.0/search/?";

@Injectable({
  providedIn: "root"
})
export class RatpService {
  private ratpResponseData?: Observable<RatpResponse>;
  constructor(
    private http: HttpClient,
    private cookieService: SsrCookieService
  ) {}

  initialise() {
    this.cookieService.set('test', 'hello');
  }

  getRatpData(query: string): Observable<RatpResponse> {
    const userSearchUrl = `${baseUrl}dataset=commerces-de-proximite-agrees-ratp&q=${query}&rows=1052&sort=-code_postal&facet=tco_libelle&facet=code_postal`;
    this.ratpResponseData = this.http.get<RatpResponse>(userSearchUrl).pipe(
      take(1),
      catchError(err => {
        return throwError(() =>
          console.log(
            "There was a problem fetching data from the RATP API, error: ",
            err
          )
        );
      })
    );
    return this.ratpResponseData;
  }
}
