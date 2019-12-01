import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    result: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  handleSearch = event => {
    const query = event.target.value

    if (this.props.onSearch) {
      this.props.onSearch(query)
    }
  }

  render() {
    const { history, result } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => history.goBack()}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { result && !!result.length && result.map(book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  imageLinks={book.imageLinks}
                />
              </li>
            )) }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
