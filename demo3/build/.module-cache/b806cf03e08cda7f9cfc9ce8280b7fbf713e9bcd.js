
// Creating React Component
var HelloWorld = React.createClass({displayName: "HelloWorld",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Hello World "), 
				React.createElement("p", null, "This is some text")
			)
		);
	}
});
ReactDOM.render(React.createElement(HelloWorld, null), document.body);


// Creating React Component
var MyComponent = React.createClass({displayName: "MyComponent",
	render:function() {
		return React.createElement("div", null, "My React Component");
	}
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('react-container'));