import React from 'react';
import QueryItem from './QueryItem';

const render =
    (props) =>
        <ul>
            {props.articles.map(
                (article) =>
                    <QueryItem
                        articleTitle={article.title}
                    />
            )}
        </ul>;

export default render;