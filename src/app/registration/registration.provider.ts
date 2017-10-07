import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class RegistrationProvider {
  private _DOMAIN_CHECK_URL = 'http://httpbin.org/get';

  constructor(private _http: Http) {

  }

  checkDomain(domain: string) {
    return this._http.get(this._DOMAIN_CHECK_URL, {params: {domain}})
      .map((response: Response) => response.json());
  }
}
