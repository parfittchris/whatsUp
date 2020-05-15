import React from 'react';
import Day from '../Day/day';
import './weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Ferrisburgh'
    };

    this.convertTemp = this.convertTemp.bind(this);
  }

  componentDidMount() {
    const currentDate = Date.now();

    if (currentDate - this.props.weather.lastUpdated > 28800000) {

      fetch(
        `https://community-open-weather-map.p.rapidapi.com/forecast?q=${this.state.location}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key':
              '0f3fcbaf19msh4d7b050b9ae787cp1673c9jsn5b15ac5bca08'
          }
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => this.getDays(data))
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        days: this.props.weather.days,
      });
    }
  }

  getDate() {

  }

  getDays(data) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const days = [];
    let date = (new Date()).getDay();
    
    for (let i = 0; i < 40; i++) {
      const day = {
        currentTemp: this.convertTemp(data.list[i].main.temp),
        high: this.convertTemp(data.list[i].main.temp_max),
        low: this.convertTemp(data.list[i].main.temp_min),
        type: data.list[i].weather[0].main,
        day: weekDays[date]
      };
      
      days.push(day);
      date = (date + 1) % 7;
      i += 8;
    }

    let obj = {
      days,
      lastUpdated: Date.now()
    };

    this.props.updateWeather(obj);
    this.setState({
      days: this.props.weather.days,
    });
  }

  convertTemp(temp) {
    return ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  renderDays() {
    let allDays = [];

    if (this.state.days) {
      allDays = this.state.days.map((day, idx) => {
        return (
          <Day
            key={idx}
            high={day.high}
            low={day.low}
            type={day.type}
            day={day.day}
          />
        );
      });
    }

    return allDays;
  }

  getState() {
    console.log(this.state)
  }
  render() {
    return (
      <div className='weatherApp'>
        <h3>Current: {this.props.weather.days[0].currentTemp}</h3>
        <h2>5 Day Weather</h2>
        <div id='forecastSection'>{this.renderDays()}</div>
        <button onClick={this.getState.bind(this)}>Click for state</button>
      </div>
    );
  }
}

export default Weather