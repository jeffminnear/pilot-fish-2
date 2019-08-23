import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.jsx';
import ResultList from './components/ResultList.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            results: []
        }
    }

    updateSearchQuery = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    search = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        this.getData({ title: this.state.searchQuery, limit: 5 });
    }

    getData = (args) => {
        axios.post('/getresults', args)
            .then(results => {
                this.setState({ loading: false, results: results.data });
            }).catch(err => {
                this.setState({ loading: false });
                console.error(err);
            });
    }

    render() {
        return (
            <div id="app">
                <SearchBar handleInput={this.updateSearchQuery} search={this.search} />
                <ResultList loading={this.state.loading} results={this.state.results} />
            </div>
        );
    }
}

export default App;