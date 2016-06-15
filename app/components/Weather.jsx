var React = require("react");
var WeatherForm = require("./WeatherForm");
var WeatherMessage = require("./WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("./ErrorModal");

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
      isLoading: false,
      errorMessage: null
    })
    openWeatherMap.getTemp(location).then(
      function (temp) {
        scope.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      function (e) {
        scope.setState({
          isLoading: false,
          errorMessage: e.message
        });
        // alert(e);
      }
    );
  },
  render: function () {

    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <p>Fetching weather...</p>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
      } else if (!isLoading) {
        return <p>Waiting for user input...</p>
      }
    }

    function renderError () {
      if (typeof errorMessage === "string") {
        console.log("errorMessage:", errorMessage);
        return (
          <ErrorModal message={errorMessage}></ErrorModal>
        );
      }
    }

    return (
      <div>
        <h1 className="page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
