import React from 'react';
import QueryItem from './QueryItem';

const render =
    (props) =>
        <ol>
            {props.articles.map(
                (article) =>
                    <QueryItem
                        articleTitle={article.title}
                        articleLink={article.webURL}
                        articleDate={article.date}
                        key={article.key}
                    />
            )}
        </ol>;

export default render;