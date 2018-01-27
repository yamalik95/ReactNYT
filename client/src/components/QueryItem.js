import React from 'react';

const render =
    (props) =>
        <li>
            <a href={props.articleLink}>
                {props.articleTitle}
            </a>
            <button className='savers'>Save</button>
        </li>;
                // onClick={props.completeItem.bind(null, props.todo, !props.checked)}
                // checked={props.checked}
export default render;
