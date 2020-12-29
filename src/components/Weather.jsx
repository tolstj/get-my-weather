import React from 'react';
import { withRouter } from 'react-router';
import getWeather from "../api/getWeather";

class Weather extends React.Component {
  _isMounted = false;
  city = this.props.match.params.city;

  componentDidMount() {
    this._isMounted = true;
    getWeather(this.city)
      .then(res => {
        if (this._isMounted)
          this.setState(res.data);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <h1>{this.city}</h1>
      </div>
    );
  }
}

export default withRouter(Weather);
