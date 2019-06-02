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

  getWeather = (e, city) => {
    e.preventDefault();
    console.log(this.state.city)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${config.apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({
        cod: data.cod,
        city: data.name,
        weather: data.weather[0],
        main: data.main,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      }))
      
      .catch(err => new Error(err))
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
