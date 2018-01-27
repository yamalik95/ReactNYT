import React from 'react';
const render =
    (props) =>
        <li>
            <a href={props.articleLink}>
                {props.articleTitle}
            </a>
            <button onClick={(e) => props.postToSave(e, props.postObj)} className='savers'>Save</button>
        </li>;
export default render;
