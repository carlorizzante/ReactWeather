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
      <h2>Main!</h2>
      {props.children}
      <footer>Footer (not a component so far)</footer>
    </div>
  );
}

module.exports = Main;
