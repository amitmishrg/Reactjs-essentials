
// Creating React Component
var Checkbox = React.createClass({displayName: "Checkbox",
	getInitialState: function() {
		return {
			checked: false
		}
	},
	handleCheck: function() {
		this.setState({
			checked: !this.state.checked
		})
	},

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "checkbox", onChange: this.handleCheck}), 
				React.createElement("p", null)
			)
		);
	}

});

ReactDOM.render(React.createElement(Checkbox, null), document.getElementById('react-container'));