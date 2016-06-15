var React = require("react"),
    ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");
var Weather = require("./components/Weather");
var About = require("./components/About");
var Contact = require("./components/Contact");
var Examples = require("./components/Examples");

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
    document.getElementById("app")
);
