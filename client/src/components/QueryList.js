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
                        postObj={{  
                                    title: article.title,
                                    date: article.date,
                                    url: article.webURL
                                }}
                        postToSave={props.postToSave}
                        saved={props.saved}
                    />
            )}
        </ol>;

export default render;