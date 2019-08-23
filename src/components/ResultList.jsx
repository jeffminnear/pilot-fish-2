import React, { Component } from 'react';
import Types from 'prop-types';

import Result from './Result.jsx';

class ResultList extends Component {
    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        }

        return (
            <ul id="results">
                {this.props.results.map((result, i) => {
                    return <Result result={result} key={i} />
                })}
            </ul>
        );
    }
}

ResultList.propTypes = {
    loading: Types.bool,
    results: Types.array
}

ResultList.defaultProps = {
    loading: false,
    results: []
}

export default ResultList;