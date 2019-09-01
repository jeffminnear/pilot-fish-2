import React, { Component } from 'react';
import Types from 'prop-types';

class SearchBar extends Component {
    render() {
        const { search, saleOnly, toggleSaleOnly, handleInput, bestOnly, toggleBestOnly } = this.props;
        return (
            <div id="search-bar">
                <form onSubmit={search}>
                    <input
                        type="checkbox"
                        name="sale-only"
                        checked={saleOnly}
                        onChange={toggleSaleOnly}
                    />
                    Show only items on sale
                    <input
                        type="checkbox"
                        name="best-price"
                        checked={bestOnly}
                        onChange={toggleBestOnly}
                    />
                    Show only the best price for each title
                    <input name="search" onInput={handleInput} />
                    <button id="search-button" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleInput: Types.func.isRequired,
    search: Types.func.isRequired,
    saleOnly: Types.bool.isRequired,
    bestOnly: Types.bool.isRequired,
    toggleSaleOnly: Types.func.isRequired,
    toggleBestOnly: Types.func.isRequired
}

export default SearchBar;