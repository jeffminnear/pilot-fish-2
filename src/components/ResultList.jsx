import React, { Component } from 'react';
import Types from 'prop-types';

import Result from './Result.jsx';

const style = {
    ul: {
        'listStyle': 'none'
    }
}

class ResultList extends Component {
    getBestOnly = (list) => {
        let best = [];

        let lowest = {};

        for (let i = 0; i < list.length; i++) {
            let element = list[i];

            if (!lowest[element.simplifiedTitle] || lowest[element.simplifiedTitle].price > element.price) {
                lowest[element.simplifiedTitle] = element;
            }
        }

        for (const [key, val] of Object.entries(lowest)) {
            best.push(val);
        }

        return best;
    }

    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        }

        let resultList = [...this.props.results];

        if (this.props.saleOnly) {
            resultList = resultList.filter(e => e.normalPrice);
        }

        if (this.props.bestOnly) {
            resultList = this.getBestOnly(resultList);
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
    results: Types.array,
    saleOnly: Types.bool,
    bestOnly: Types.bool
}

ResultList.defaultProps = {
    loading: false,
    results: []
}

export default ResultList;