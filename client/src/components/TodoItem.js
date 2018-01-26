import React from 'react';

const render =
    (props) =>
        <li>
            <input
                type="checkbox"
                onClick={props.completeItem.bind(null, props.todo, !props.checked)}
                checked={props.checked} />
            {props.todo}
        </li>;

export default render;