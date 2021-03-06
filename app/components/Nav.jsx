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

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    // console.log("Search submitted, not wired up yet.");
    var location = this.refs.search.value;
    // console.log(location);
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.search.value = null;
      window.location.hash = "#/?location=" + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><Link to="/">React Weather App</Link></li>
            <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            <li><Link to="/examples" activeClassName="active">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search weather by city..." /></li>
              <li><input type="submit" className="button" value="Get weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
