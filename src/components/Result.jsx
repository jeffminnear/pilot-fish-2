import React, { Component } from 'react';
import Types from 'prop-types';

class Result extends Component {
    render() {
        const { result } = this.props;

        return (
            <a href={result.linkURL}>
                <li className="search-result">
                    <h3>{result.title}</h3>
                    <img src={result.imageURL} />
                </li>
            </a>
        );
    }
}

Result.propTypes = {
    result: Types.shape({
        imageURL: Types.string,
        linkURL: Types.string,
        normalPrice: Types.string,
        price: Types.string,
        simplifiedTitle: Types.string,
        store: Types.string,
        title: Types.string
    }).isRequired
}

export default Result;