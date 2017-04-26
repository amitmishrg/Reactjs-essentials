import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: "Amit",
	phone: '8802100560'
}, {
	id: 2,
	name: "John",
	phone: '9936572274'
}, {
	id: 3,
	name: "Deo",
	phone: '9802100560'
}, {
	id: 4,
	name: "Foo",
	phone: '9702100560'
}];

// App Component
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contact List </h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

// Render App component by using app id
ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'))