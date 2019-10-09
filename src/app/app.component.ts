import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  paises:any;
  constructor (
    private _countryService: CountryService
  ) {
  }

  ngOnInit() { 
    this.cargarPaises();
  }

  cargarPaises() {
    this._countryService.cargarPaises().subscribe(resp => {
      this.paises = resp;
    });
  }

}
