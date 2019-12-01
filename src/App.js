import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    loading: true,
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
    BooksAPI.search(query).then(result => {
      console.log(result)
      this.setState(() => ({
        searchResult: result
      }))
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
            />
          )} />

          <Route path="/search" render={( {history} ) => (
            <Search
              history={history}
              result={this.state.searchResult}
              onSearch={this.searchBooks}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
