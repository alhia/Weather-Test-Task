import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import config  from './config';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        cod: null,
        city: '',
        weather: '',
        main: null,
        icon: null
    }
}



  render() {
    const { cod, city, weather, main, icon } = this.state;
    return (
    <div className="App">
      <div>
      {
      !cod ? null
      :cod !== 200? <h1 className="not-found">Could not find city</h1> 
      : <Weather  
      city={city} 
      temp={parseInt(main.temp)}
      icon={icon}
      temp_min={parseInt(main.temp_min)}
      temp_max={parseInt(main.temp_max)}
      description={weather.description}
      />
      }
      </div>
      <SearchBar getWeather={this.getWeather}/>
    </div>
  );
  }
}

export default App;
