import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  /* Array and JSON Oject data start  */
  countries = ['USA', 'Canada', 'Australia','India'];
  states: any = {
    'USA': ['New York', 'California', 'Texas'],
    'Canada': ['Ontario', 'Quebec', 'Alberta'],
    'Australia': ['New South Wales', 'Victoria', 'Queensland'],
    'India': ['Maharastra']
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
    'Queensland': ['Brisbane', 'Gold Coast', 'Cairns'],
    'Maharastra': ['Jalgaon','Bhusaval','Pune','Mumbai']
  };

   /*  JSON Oject data end  */
  
  selectedCountry: string = '';
  selectedState: string = '';
  selectedCity: string = '';
  selectedValues: string = '';
  
  /* Called when the country selection changes */
  onCountryChange() {
    this.selectedState = '';
    this.selectedCity = '';
    console.log(this.selectedCountry)
  }
  
  /* Called when the state selection changes. */
  onStateChange() {
    this.selectedCity = '';
  }
  
  /* Called when the city selection changes. */
  onCityChange() {
    this.selectedValues = this.selectedCountry + ', ' + this.selectedState + ', ' + this.selectedCity;
  }
  
  /* Below method is used for reset the dropdown selected value  */
  resetValue(){
    this.selectedCountry = '';
    this.selectedState = '';
    this.selectedCity = ''
    this.statesArray = [];
    this.citiesArray = []
  }
  

  /* The below getStates and getCities method is used when the state value is not 
   obtained after selecting the country so that why */
  statesArray = [];
  getStates() {

    /*  Array.isArray() returns true if an object is an arry, otherwise false  */
    const selectedCountries = Array.isArray(this.selectedCountry) ? this.selectedCountry : [this.selectedCountry];
  
    for (let country of selectedCountries) {
      /*concat Combines two or more arrays. This method returns a new array without modifying any existing arrays. */
      this.statesArray = this.statesArray.concat(this.states[country]);
    }
  
    return [...new Set(this.statesArray)];
  }

  citiesArray = []
  getCities() {
    /*  Array.isArray() returns true if an object is an arry, otherwise false  */
    const selectedStates = Array.isArray(this.selectedState) ? this.selectedState : [this.selectedState];
  
    for (let state of selectedStates) {
    /*concat Combines two or more arrays. This method returns a new array without modifying any existing arrays. */
      this.citiesArray = this.citiesArray.concat(this.cities[state]);
    }
  
    return [...new Set(this.citiesArray)];
  }
}
