
// Component Lifecycle
var Box = React.createClass({displayName: "Box",
	// Before component render set the properties
	getDefaultProps: function() {
		return {
			backgroundColor: "blue",
			height: 200,
			width: 200
		}
	},
	//component is about to mount before render
	componentWillMount: function() {
		alert('component is about to mount before render');
	},
	//component did mount after render
	componentDidMount: function() {
		alert('component did mount after render');
	},
	render: function() {
		return React.createElement("div", {style: this.props})
	}
});

React.render(React.createElement(Box, null), document.body);

var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function() {
	React.unmountComponentAtNode(document.body);
	alert('component is unmounted');
}