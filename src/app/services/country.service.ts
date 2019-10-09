import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = environment.api_url;
  constructor(
    private http: HttpClient
  ) { }
  
  cargarPaises() {
    let url = `${this.url}/rest/v2/all`
    //let url = this.url + '/rest/v2/all';
    return this.http.get(url);
  }



  
}
