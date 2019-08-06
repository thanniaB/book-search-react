import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
// import API from '../services/API';
import books from '../sample-books';

class App extends React.Component {
  state = {
    searchresults: [],
    errorMessage: ''
  }

  /* I had several problems with the open books api:
     First I couldn't find a way to search by title or author, just by an id like isbn (reasonable),
     then I had a CORS policy error, which I overlooked by using a proxy I found on the internet,
     and at last all my requests were returning an empty object, weird because when using curl on
     my console they did return book information (although not something I could directly use here)
     so, in order to not waste more time, I decided to just create some preloaded objects for the excercise,
     and leave this unused code here so you could take a look at what I was trying to do.
  
  searchByIsbn = async (query) => {
    try {
      const parameters = `api/autbibkeys=ISBN:${query}`;
      const response = await API.makeRequest({ parameters: parameters, method: 'GET', data: this.state.searchresults });
      console.log(response);
    } catch (error) {
      alert(error);
    }
  }
  */

  componentDidMount() {
    const localStorageRef = localStorage.getItem('searchresults');
    if(localStorageRef) {
      this.setState({searchresults: JSON.parse(localStorageRef)});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('searchresults', JSON.stringify(this.state.searchresults));
  }

  searchForBooks = (query, type) => {
    let searchresults;

    switch (type) {
      case 'title':
      case 'author':
        searchresults = books.filter(book => book[type].toLowerCase().trim().indexOf(query.toLowerCase().trim()) > -1);
        break;
      case 'isbn':
        searchresults = books.filter(book => book[type].toString().trim() === query.trim());
        break;
      default: return;
    }

    if(searchresults.length < 1) {
      this.setState({errorMessage: 'No results found.'});
    } else {
      this.setState({errorMessage: ''});
    }

    this.setState({ searchresults });
  }

  render() {
    return (
      <React.Fragment>
        <SearchForm searchForBooks={this.searchForBooks} />
        <span> {this.state.errorMessage}</span>

        <ul className="search-results">
          {this.state.searchresults.map(
            searchResult =>
              <SearchResult
                key={searchResult.isbn}
                details={searchResult}
              />)}
        </ul>
      </React.Fragment>

    )
  }

}

export default App;
