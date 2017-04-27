
// Component Lifecycle
var Box = React.createClass({displayName: "Box",
	componentWillMount: function() {
		alert('component is about to mount before render');
	},
	componentDidMount: function() {
		alert('component did mount after render');
	},
	render: function() {
		return React.createElement("div", null)
	}
});

React.render(React.createElement(Box, null), document.body);

var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function() {
	React.unmountComponentAtNode(document.body);
	alert('component is unmounted');
}