import React from 'react';
import { withRouter } from 'react-router';
import getWeather from '../api/getWeather';
import loading from '../images/loading.svg';

class Weather extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      city: this.props.match.params.city,
      today: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    getWeather(this.state.city)
      .then(res => {
        if (this._isMounted)
          this.setState({
            today: res.data.dataseries[0],
            isLoading: false
          });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const today = this.state.today;
    return (
      <div className="Weather">
        <h1>{this.state.city}</h1>
        {this.state.isLoading
          ? <img src={loading} alt="" className="loading" />
          : <div>
              <p>Weather: {today.weather}</p>
              <p>Temperature: {today.temp2m.min} ... {today.temp2m.max} &deg;C</p>
            </div>
        }
      </div>
    );
  }
}

export default withRouter(Weather);
