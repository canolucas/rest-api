import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CountryService
{
	private http : Http = null;

	endpoint_url : string = "https://restcountries.eu/rest/v1/region/";

	constructor(http : Http)
	{
		this.http = http;
	}

	getCountriesByRegion(region : string)
	{
		//return this.http.get(this.endpoint_url + region).map(res => res.json());
		return this.http.get("http://localhost:8080/api/" + region).map(res => res.json());
	}
}
