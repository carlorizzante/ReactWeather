var React = require("react");
var WeatherForm = require("./WeatherForm");
var WeatherMessage = require("./WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function () {
    return {
      // location: "Milan",
      // temp: 28
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var scope = this;
    this.setState({
      isLoading: false
    })
    openWeatherMap.getTemp(location).then(
      function (temp) {
        scope.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      function (err) {
        scope.setState({
          isLoading: false
        });
        alert(err);
      }
    );
  },
  render: function () {

    var {location, temp, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <p>Fetching weather...</p>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
      } else if (!isLoading) {
        return <p>Waiting for user input...</p>
      }
    }

    return (
      <div>
        <h1>Weather component</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
