import React from 'react';

// Contact Component
class Contact extends React.Component {
	render() {
		return (
			<li>{this.props.contact.name} {this.props.contact.phone}</li>
		)
	}
}

// or using es2015
/*
const Contact = ({contact}) =>
	<li>
		{contact.name} {contact.phone}
	</li>
*/

//es2015
export default Contact;