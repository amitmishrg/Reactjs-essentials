
// Component Lifecycle
var Box = React.createClass({displayName: "Box",
	
	render: function() {
		return React.createElement("div", null)
	}
});

React.render(React.createElement(Box, null), document.body);