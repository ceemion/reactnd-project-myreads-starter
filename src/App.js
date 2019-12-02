import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    loading: true,
    searching: false,
    books: [],
    searchResult: [],
    searchError: ''
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
        loading: false
      }))
    })
  }

  searchBooks = query => {
    this.setState(() => ({
      searching: true
    }))

    BooksAPI.search(query).then(result => {
      if (result.error) {
        this.setState(() => ({
          searchError: `No books found for '${query}'.`,
          searching: false
        }))
      } else {
        this.setState(() => ({
          searchResult: result,
          searchError: '',
          searching: false
        }))
      }
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // refresh books on update
      this.getAllBooks()
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
              <Bookshelf
                loading={this.state.loading}
                books={this.state.books}
                onUpdate={this.updateBook}
              />
            )} />

            <Route path="/search" render={( {history} ) => (
              <Search
                history={history}
                searching={this.state.searching}
                result={this.state.searchResult}
                error={this.state.searchError}
                onSearch={this.searchBooks}
                onUpdate={this.updateBook}
              />
            )} />

            <Route render={() => (
              <div className="status-text">
                <p>Page Not Found</p>

                <Link to="/">Return Home</Link>
              </div>
            )} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
