
// Creating React Component
var Checkbox = React.createClass({
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
			<div>
				<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
				<p>This box is {msg}</p>
			</div>
		);
	}

});

ReactDOM.render(<Checkbox />, document.getElementById('react-container'));