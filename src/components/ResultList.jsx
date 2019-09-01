import React, { Component } from 'react';
import Types from 'prop-types';

import Result from './Result.jsx';

const style = {
    ul: {
        'listStyle': 'none'
    }
}

class ResultList extends Component {
    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        }

        let resultList = [...this.props.results];

        if (this.props.saleOnly) {
            resultList = resultList.filter(e => e.normalPrice);
        }

        if (resultList.length === 0) {
            return <h2>No results found with current settings</h2>
        }

        return (
            <ul id="results" style={style.ul}>
                {resultList.map((result, i) => {
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