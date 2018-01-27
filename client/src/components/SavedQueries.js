import React from 'react';
import SavedItem from './SavedItem';

const render =
    (props) =>
        <ol>
            {props.saved.map(
                (article, index) =>
                    <SavedItem
                        idForDelete={index}
                        Key={article._id}
                        key={article._id}
                        savedTitle={article.title}
                        savedDate={article.date}
                        savedLink={article.webURL}
                        deleteSaved={props.deleteSaved}
                    />
            )}
        </ol>;

export default render;