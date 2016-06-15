var React = require("react");
var {Link} = require("react-router");

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Examples!</h1>
        <p>Here are few example locations to try out.</p>
        <ol>
          <li><Link to="/?location=copenhagen,dk">Grab weather for Copenhagen, DK</Link></li>
          <li><Link to="/?location=london,uk">Grab weather for London, UK</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
