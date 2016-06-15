var React = require("react");

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1>About!</h1>
      <p>Welcome!</p>
    </div>
  );
}

module.exports = About;
