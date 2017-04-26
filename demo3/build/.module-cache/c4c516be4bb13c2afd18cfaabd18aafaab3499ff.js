
// Creating React Component
var MyComponent = React.createClass({displayName: "MyComponent",
	render:function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Hello World "), 
				React.createElement("p", null, "This is some text")
			)
		);
	}
});

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(MyComponent, null), 
		React.createElement(MyComponent, null), 
		React.createElement(MyComponent, null)
	)
	, document.getElementById('react-container'));