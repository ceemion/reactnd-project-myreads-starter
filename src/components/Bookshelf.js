import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  state = {
    books: [],
    shelves: ['currentlyReading', 'wantToRead', 'read']
  }

  filterBooks = books => shelf => books.filter(b => {
    return b.shelf === shelf;
  })

  orderBooks = (books, shelves) => {
    return shelves.map(shelf => {
      return {
        shelf,
        books: this.filterBooks(books)(shelf)
      }
    })
  }

  shelfTitle = name => {
    const mapping = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: 'Read'
    }

    return mapping[name]
  }

  render() {
    const { shelves } = this.state
    const { loading, books } = this.props

    if (loading) {
      return (
        <div>Fetching books...</div>
      )
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          { !!books.length ? (
            <div>
              { this.orderBooks(books, shelves).map(shelf => (
                <div key={shelf.shelf} className="bookshelf">
                  <h2 className="bookshelf-title">
                    { this.shelfTitle(shelf.shelf) }
                  </h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      { shelf.books.map(book => (
                        <li key={book.id}>
                          <Book
                            title={book.title}
                            authors={book.authors}
                            imageLinks={book.imageLinks}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))
              }
            </div>
          ) : (
            <div>There are no books</div>
          ) }
        </div>
        <div className="cta-buttons">
          <Link to="/search">
            <button className="search">Search</button>
          </Link>
          <button className="add" onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default Bookshelf
