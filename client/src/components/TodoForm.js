import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        query: ''
    };

    clickHandler = (event) => {
        event.preventDefault();
        this.props.updateList(this.state.todoItem);
        this.setState({ query: '' });
    }

    changeHandler = (event) => {
        const { value } = event.target;
        this.setState({ query: value });
    }

    render() {
        return <form>
            <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.changeHandler} />
            <button onClick={this.clickHandler}>Search for your favorite news!</button>
        </form>
    }

}

export default TodoForm;