var Note = React.createClass({displayName: "Note",
    edit: function() {

    },
    remove: function() {

    },
    render: function() {
        return (
            React.createElement("div", {className: "note"}, 
                React.createElement("p", null, this.props.children)
            )
        )
    }
});

React.render(React.createElement(Note, null, "Hello World"), document.getElementById('react-container'));