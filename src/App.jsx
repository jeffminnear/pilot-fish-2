import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar.jsx';
import ResultList from './components/ResultList.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            results: [],
            saleOnly: false,
            bestOnly: true
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

    toggleSaleOnly = () => {
        this.setState({ saleOnly: !this.state.saleOnly });
    }

    toggleBestOnly = () => {
        this.setState({ bestOnly: !this.state.bestOnly });
    }

    render() {
        const { saleOnly, bestOnly, loading, results } = this.state;

        return (
            <div id="app">
                <SearchBar
                    handleInput={this.updateSearchQuery}
                    search={this.search}
                    saleOnly={saleOnly}
                    bestOnly={bestOnly}
                    toggleSaleOnly={this.toggleSaleOnly}
                    toggleBestOnly={this.toggleBestOnly}
                />
                <ResultList
                    loading={loading}
                    results={results}
                    saleOnly={saleOnly}
                    bestOnly={bestOnly}
                />
            </div>
        );
    }
}

export default App;