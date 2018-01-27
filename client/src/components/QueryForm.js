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
        beginDate: '',
        endDate: '',
        articles: []
    };

    constructQueryURL = () => {
        const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        const keyAPI = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&"
        const queryFields = ['&q=','&begin_date=','&end_date=','&page=0']
        const stateProps = ['query','beginDate','endDate']
        let fieldsURL = ""
        for (let i = 0; i < queryFields.length - 1; i++) {
            console.log(this.state[stateProps[i]])
            if (stateProps[i] === 'beginDate' || stateProps[i] === 'endDate') {
                fieldsURL += queryFields[i] + this.state[stateProps[i]] + '0101'
            } else {
                fieldsURL += queryFields[i] + this.state[stateProps[i]]
            }
        }
        fieldsURL += queryFields[3]
        return baseURL + keyAPI + fieldsURL    
    }

    getArticles = (queryURL) => {
        axios.get(this.constructQueryURL()).then((res) => {
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
        this.setState({ query: '', endDate: '', beginDate: '' });
    };

    changeHandler = (event) => {
        const { value } = event.target;
        switch(event.target.name) {
            case 'query':
                this.setState({ query: value })
                break;
            case 'beginDate':
                this.setState({ beginDate: value })
                break;
            case 'endDate':
                this.setState({ endDate: value })
                break;
            default:
                console.log('YOU SHOULD NEVER SEE THIS ON THE CONSOLE')
        }
    };

    render() {
        return <form>
            Topic: <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.changeHandler}
            />
            Start Year: <input
                type="text"
                name="beginDate"
                value={this.state.beginDate}
                onChange={this.changeHandler}
            />
            End Year: <input
                type="text"
                name="endDate"
                value={this.state.endDate}
                onChange={this.changeHandler}
            />
            <button onClick={this.clickHandler}>Search for your favorite news!</button>
            <QueryList articles={this.state.articles} />
        </form>
    }

}

export default QueryForm;