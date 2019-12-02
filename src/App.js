import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    loading: true,
    searching: false,
    books: [],
    searchResult: []
  }

  componentDidMount() {
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
      console.log(result)
      this.setState(() => ({
        searchResult: result,
        searching: false
      }))
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
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
              onSearch={this.searchBooks}
              onUpdate={this.updateBook}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
