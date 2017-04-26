
// Creating React Component
// var HelloWorld = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>Hello World </h1>
// 				<p>This is some text</p>
// 			</div>
// 		);
// 	}
// });
// ReactDOM.render(<HelloWorld />, document.body);


// Creating React Component
var MyComponent = React.createClass({displayName: "MyComponent",
	render:function() {
		return React.createElement("div", null, "My React Component");
	}
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('react-container'));