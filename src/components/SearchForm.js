import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  queryRef = React.createRef();
  typeRef = React.createRef();

  static propTypes = {
    searchForBooks: PropTypes.func
  }

  searchForBooks = (event) => {
    event.preventDefault();
    const query = this.queryRef.current.value;
    const type = this.typeRef.current.value;
    this.props.searchForBooks(query, type);
    this.queryRef.current.value = '';
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.searchForBooks}>
        <h1>BOOK SEARCH</h1>
        <input name="query" ref={this.queryRef} type="text" placeholder="What are you looking for?" />
        <div className="flex row-to-column">
            <span> Search by: </span>
            <select name="type" ref={this.typeRef}>
              <option value="title"> Title </option>
              <option value="author"> Author </option>
              <option value="isbn"> ISBN </option>
            </select>
          <button type="submit">Search!</button>
        </div>
      </form>
    )
  }

}

export default SearchForm;
