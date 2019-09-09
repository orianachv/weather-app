import React from 'react';
import Weather from './components/Weather';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {},
      city: 'buenos aires',
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},ark&units=metric&APPID=9417951164051083300a41cb33c18e4d`,
      )
      .then(data => this.setState({ weather: data.data }));
  }
  onChange(e) {
    e.preventDefault();
    const valor = e.target.value;
    this.setState({ value: valor }, () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value},ark&units=metric&APPID=9417951164051083300a41cb33c18e4d`,
        )
        .then(data => this.setState({ weather: data.data }));
    });
  }
  render() {
    return (
      <div>
        <h1 className="head"> Weather Chanel</h1>
        <Weather data={this.state.weather} onChange={this.onChange}></Weather>
      </div>
    );
  }
}
