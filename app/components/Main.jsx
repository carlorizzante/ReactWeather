var React = require("react");
var Nav = require("./Nav");

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//         <footer>Footer</footer>
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="columns small-centered medium-8 large-6">
          {props.children}
        </div>
        <footer>Footer (not a component so far)</footer>
      </div>
    </div>
  );
}

module.exports = Main;
