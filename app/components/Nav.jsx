var React = require("react"),
    {Link, IndexLink} = require("react-router");

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <nav>
//         <ul>
//           <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
//           <li><Link to="/about" activeClassName="active">About</Link></li>
//           <li><Link to="/contact" activeClassName="active">Contact</Link></li>
//           <li><Link to="/examples" activeClassName="active">Examples</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        <li><Link to="/examples" activeClassName="active">Examples</Link></li>
      </ul>
    </nav>
  );
}

module.exports = Nav;
