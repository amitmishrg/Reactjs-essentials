var Note = React.createClass({displayName: "Note",
    edit: function() {
        alert('edit');
    },
    remove: function() {
        alert('remove');
    },
    renderDisplay: function() {
        return (
            React.createElement("div", {className: "note"}, 
                React.createElement("p", null, this.props.children), 
                React.createElement("span", null, 
                    React.createElement("button", {onClick: this.edit, className: "btn btn-primary glyphicon glyphicon-pencil"}), 
                    React.createElement("button", {onClick: this.remove, className: "btn btn-danger glyphicon glyphicon-trash"})
                )
            )
        );
    },
    renderForm: function() {
        return (
            React.createElement("div", {className: "note"}, 
                React.createElement("textarea", {defaultValue: this.props.children, className: "form-control"}), 
                React.createElement("button", {className: "btn btn-success btn-sm glyphicon glyphicon-floppy-disk"})
            )
        )
    },
    render: function() {

    }
});

React.render(React.createElement(Note, null, "Hello World"), document.getElementById('react-container'));