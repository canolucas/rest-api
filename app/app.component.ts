import {Component} from '@angular/core';
import {CountryService} from './service/country.service'

@Component({
	selector: 'app-component',
	templateUrl: 'app/app.component.tpl.html',
	providers: [CountryService]
})

export class AppComponent
{
	private error : string;
	private region : string;

	private countries;

	constructor(private _countryService: CountryService){
		this._countryService = _countryService;
	}

	getCountriesByRegion()
	{
		this.error = "";
		this.countries = [];
		this._countryService.getCountriesByRegion(this.region)
		.subscribe(
			data => this.countries = data,
			error => this.error = "Region " + this.region + " is invalid."
		);
	}
}
