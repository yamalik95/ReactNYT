import React from 'react';

const render =
    (props) =>
        <li>
            <input
                type="checkbox"
             />
            {props.articleTitle}
        </li>;
                // onClick={props.completeItem.bind(null, props.todo, !props.checked)}
                // checked={props.checked}
export default render;
