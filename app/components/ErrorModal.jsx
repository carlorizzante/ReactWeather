var React = require("react");
var ReacDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Oh no!!",
      message: "Bummer, an error occurred."
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
    var $modal = $(ReactDOMServer(modalMarkup));
    $(ReactDOM.findDOMNode(this).html($modal));
    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },
  render: function () {
    return <div></div>
  }
});

module.exports = ErrorModal;
