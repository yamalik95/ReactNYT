import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        todoItem: ''
    };

    clickHandler = (event) => {
        event.preventDefault();
        this.props.updateList(this.state.todoItem);
        this.setState({ todoItem: '' });
    }

    changeHandler = (event) => {
        const { value } = event.target;
        this.setState({ todoItem: value });
    }

    render() {
        return <form>
            <input
                type="text"
                name="todoItem"
                value={this.state.todoItem}
                onChange={this.changeHandler} />
            <button onClick={this.clickHandler}>Add this to the list!</button>
        </form>
    }

}

export default TodoForm;