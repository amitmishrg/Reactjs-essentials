
// Creating React Component
var MyComponent = React.createClass({displayName: "MyComponent",
	render:function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.text, " "), 
				React.createElement("p", null, this.props.children)
			)
		);
	}
});

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(MyComponent, {text: "Hello World"}, 
			"This is Hello World"
		), 
		React.createElement(MyComponent, {text: "How are you?"}, 
			"This is How are you"
		), 
		React.createElement(MyComponent, {text: "Goodbye"}, 
			"This is Goodbye"
		)
	)
	, document.getElementById('react-container'));