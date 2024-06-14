# Reading List UI

## Overview

The Reading List UI is a React application that allows users to browse a list of books and maintain a personal reading list. Users can search for books, add them to their reading list, and remove them as needed. The reading list is saved in local storage to preserve the user's data between sessions.

## Features

- **Search for Books:** Users can search for books by title using an autocomplete search bar.
- **Add to Reading List:** Users can add books to their reading list.
- **Remove from Reading List:** Users can remove books from their reading list.
- **Persistent Data:** The reading list is saved in local storage.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material-UI:** A popular React UI framework.
- **Apollo Client:** A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- **GraphQL:** A query language for your API.
- **Local Storage:** Web storage API for persisting data across browser sessions.

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sylvia-Rwenyo/Ello-full-stack-engineering-challenge.git
    cd Ello-full-stack-engineering-challenge/frontend/src
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and go to `http://localhost:3000`.

### Building the App

To create a production build of the app, run:

```bash
npm run build
# or
yarn build
```

## Project Structure

├── public
│   ├── index.html
│   └── assets
│       └── ...
├── src
│   ├── apolloClient.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── ReadingList.css
│   ├── ReadingList.js
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── ...

## Code Overview

### `src/App.js`

This file contains the main React component for the app. It includes:

- **GraphQL Query:** A query to fetch books data from the GraphQL server.
- **Custom Theme:** A custom Material-UI theme for styling the application.
- **State Management:** State variables and effects for managing the search term and reading list.
- **UI Components:** The layout and structure of the app, including the search bar, book list, and reading list components.

### `src/ReadingList.js`

This file contains the `ReadingList` component which is responsible for rendering the list of books added by the user. It includes:

- **Book Display:** Each book's cover, title, author, and reading level.
- **Remove Button:** An option to remove books from the reading list.

## Styling

The app uses Material-UI for component styling. Custom styles are applied through the `sx` prop and CSS classes defined in `App.css` and `ReadingList.css`.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
