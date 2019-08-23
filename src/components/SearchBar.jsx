import React, { Component } from 'react';
import Types from 'prop-types';

class SearchBar extends Component {
    render() {
        return (
            <div id="search-bar">
                <form onSubmit={this.props.search}>
                    <input name="search" onInput={this.props.handleInput} />
                    <button id="search" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    handleInput: Types.func.isRequired,
    search: Types.func.isRequired
}

export default SearchBar;