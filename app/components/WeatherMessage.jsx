var React = require("react");

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {location, temp} = this.props;
//     return (
//       <div>
//         <h3>It is {temp} degree in {location}.</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {location, temp} = props;
  return (
    <div>
      <h3>It is {temp} degree in {location}.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
