import React from 'react';
import TodoItem from './TodoItem';

const render =
    (props) =>
        <ul>
            {props.todos.map(
                (todo) =>
                    <TodoItem
                        todo={todo}
                        checked={props.checked}
                        completeItem={props.completeItem} />
            )}
        </ul>;

export default render;