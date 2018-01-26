import React, { Component } from 'react';
import axios from 'axios';
import QueryList from './QueryList';

class QueryForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        query: '',
        articles: []
    };

    getArticles = (queryParameter) => {
        const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        const keyAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&"
        const queryFields = ['q=']
        axios.get(baseURL+keyAPI+queryFields[0]+queryParameter).then((res) => {
            let parsedQuery = []
            for (var i = 0; i < 5; i++) {
                let importantInfoObj = {key: i, webURL: res.data.response.docs[i].web_url, date: res.data.response.docs[i].pub_date, title: res.data.response.docs[i].headline.main}
                parsedQuery[i] = importantInfoObj
               console.log(parsedQuery)
            }
          this.setState({ articles: parsedQuery })
        });
    };

    clickHandler = (event) => {
        event.preventDefault();
        this.getArticles(this.state.query)
        this.setState({ query: '' });
    };

    changeHandler = (event) => {
        const { value } = event.target;
        this.setState({ query: value });
    };

    render() {
        return <form>
            <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.changeHandler} />
            <button onClick={this.clickHandler}>Search for your favorite news!</button>
            <QueryList articles={this.state.articles} />
        </form>
    }

}

export default QueryForm;