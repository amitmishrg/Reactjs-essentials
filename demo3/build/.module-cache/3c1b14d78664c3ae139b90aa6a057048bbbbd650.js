
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
		var msg;
		if (this.state.checked) {
			msg = "Checked";
		}
		else {
			msg = "Unchecked"
		}
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "checkbox", onChange: this.handleCheck, defaultChecked: this.state.checked}), 
				React.createElement("p", null, "This box is ", msg)
			)
		);
	}

});

ReactDOM.render(React.createElement(Checkbox, null), document.getElementById('react-container'));