import { Component } from '@angular/core';

interface Country {
  shortName: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  countries = ['USA', 'Canada', 'Australia'];
  states: any = {
    'USA': ['New York', 'California', 'Texas'],
    'Canada': ['Ontario', 'Quebec', 'Alberta'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland']
  };
  cities: any = {
    'New York': ['New York City', 'Buffalo', 'Rochester'],
    'California': ['Los Angeles', 'San Francisco', 'San Diego'],
    'Texas': ['Houston', 'Dallas', 'Austin'],
    'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
    'Quebec': ['Montreal', 'Quebec City', 'Sherbrooke'],
    'Alberta': ['Calgary', 'Edmonton', 'Red Deer'],
    'New South Wales': ['Sydney', 'Newcastle', 'Wollongong'],
    'Victoria': ['Melbourne', 'Geelong', 'Ballarat'],
    'Queensland': ['Brisbane', 'Gold Coast', 'Cairns']
  };
  
  selectedCountry: string = '';
  selectedState: string = '';
  selectedCity: string = '';
  selectedValues: string = '';
  
  onCountryChange() {
    this.selectedState = '';
    this.selectedCity = '';
    console.log(this.selectedCountry)
  }

  
  onStateChange() {
    this.selectedCity = '';
  }
  
  onCityChange() {
    this.selectedValues = this.selectedCountry + ', ' + this.selectedState + ', ' + this.selectedCity;
  }

  resetValue(){
    this.selectedCountry = '';
    this.selectedState = '';
    this.selectedCity = ''
    this.statesArray = [];
    this.citiesArray = []
  }
  
  statesArray = [];
  getStates() {
    const selectedCountries = Array.isArray(this.selectedCountry) ? this.selectedCountry : [this.selectedCountry];
  
    for (let country of selectedCountries) {
      this.statesArray = this.statesArray.concat(this.states[country]);
    }
  
    return [...new Set(this.statesArray)];
  }

  citiesArray = []
  getCities() {
    const selectedStates = Array.isArray(this.selectedState) ? this.selectedState : [this.selectedState];
  
    for (let state of selectedStates) {
      this.citiesArray = this.citiesArray.concat(this.cities[state]);
    }
  
    return [...new Set(this.citiesArray)];
  }
}
