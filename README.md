# MyReads Project

This is a bookshelf app that allows you to search, select and categorize books you have read, are currently reading, or want to read. This application was built using React and uses an API server and client library to persist information as you interact with the application.

### Requirements
* Node JS `11.14.0`
* NPM `6.13.1`
* Yarn `1.15.2`

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built with React 16.6.3.

## Setup
### Install dependencies
`npm install` or `yarn install`

### Run the app locally
`npm start` or `yarn start` <br>

Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will fetch and display all books in your shelf.

Visit http://localhost:3000/search to search for books and add to MyReads shelf

## Functionalities
##### A. List and Categorize Books
All your books are listed by categories on the homepage when you visit http://localhost:3000/. You can click the dropdown arrow on each book to move between categories. Categories currently supported are:
* Currently Reading
* Want to Read
* Read

Selecting "None" removes a book from your bookshelf. You can re-add it on the search page.

##### B. Search Books
You can search for books when you visit http://localhost:3000/search or by clicking the search icon on the bottom right of the screen. You can move a book to your shelf by selecting a category from the dropdown arrow on the book.

## Run Tests
`npm test` or `yarn test` <br>
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build for Production
`npm run build` or `yarn build` <br>
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

`npm start` or `yarn start` <br>
Open [http://localhost:5000](http://localhost:5000) to view this production build in the browser.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
