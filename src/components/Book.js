import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func
  }

  handleBookUpdate = (event, book) => {
    const value = event.target.value;

    if (this.props.onUpdate) {
      this.props.onUpdate(book, value)
    }
  }

  render() {
    const { book } = this.props
    const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : ''

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => this.handleBookUpdate(event, book)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">
          {book.authors && !!book.authors.length && book.authors.map(author => (
            <p key={author}>{author}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Book
