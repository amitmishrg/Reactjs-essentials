var Note = React.createClass({displayName: "Note",
    // Default state of editing
    getInitialState: function() {
        return {
            editing: false
        }
    },
    edit: function() {
        this.setState({
            editing: true
        });
    },
    save: function() {
        this.setState({
            editing: false
        });
    },
    remove: function() {
        alert('remove');
    },
    renderDisplay: function() {
        return (
            React.createElement("div", {className: "note"}
                
                
            )
        );
    },
    renderForm: function() {
        return (
            React.createElement("div", {className: "note"}
                
            )
        );
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm;
        } else {
            return this.renderDisplay;
        }
    }
});

React.render(React.createElement(Note, null, "Hello World"), document.getElementById('react-container'));