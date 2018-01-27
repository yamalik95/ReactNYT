import React from 'react';
const render =
    (props) =>
        <li>
            <a href={props.savedLink}>
                {props.savedTitle}
            </a>
            <button onClick={(e) => props.deleteSaved(e, props.Key, props.idForDelete)} className='savers'>Delete</button>
        </li>;
                // onClick={props.completeItem.bind(null, props.todo, !props.checked)}
                // checked={props.checked}
export default render;
