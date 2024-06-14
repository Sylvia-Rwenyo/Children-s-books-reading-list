# Reading List UI

## Overview

The Reading List UI is a React application designed for users to manage their reading interests. It allows users to search for books, add them to a personal reading list, and remove them as needed. The reading list functionality includes local storage to retain user data between sessions.

## Features

- **Search for Books:** Utilize an autocomplete search bar to find books by title.
- **Add to Reading List:** Easily add books to your personal reading list.
- **Remove from Reading List:** Remove books from the reading list when no longer desired.
- **Persistent Data:** Store reading list data locally for seamless session management.

## Technologies Used

- **React:** JavaScript library for building responsive user interfaces.
- **Material-UI:** React UI framework for consistent and customizable design components.
- **Apollo Client:** State management library enabling efficient data handling with GraphQL.
- **GraphQL:** Query language for APIs to efficiently fetch and manipulate data.
- **Local Storage:** Web storage API for storing key-value pairs in a web browser.

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

### Data
To access the data used here, transition to the `backend/src` directory and run

```bash
npm install
```

Then, initiate the following command to launch the server

```bash
npm start
```

### Running the App

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

### Building the App

To compile a production version of the application, execute:

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
│   ├── package-lock.json
│   ├── ReadingList.css
│   ├── ReadingList.js
│   └── ...
├── package-lock.json
├── package.json
├── README.md
└── ...

## Code Overview

### `src/App.js`

Main React component file for the application, encompassing:

- **GraphQL Query:** Fetches book data from the GraphQL server.
- **Custom Theme:** Material-UI theme for app styling.
- **State Management:** Manages search term and reading list using React hooks.
- **UI Components:** Includes search bar, book list, and reading list components.

### `src/ReadingList.js`

File containing the `ReadingList` component, responsible for displaying user-added books:

- **Book Display:** Shows book cover, title, author, and reading level.
- **Remove Button:** Allows users to remove books from their reading list.

## Styling

Material-UI is used for component styling, employing the `sx` prop and CSS classes defined in `App.css` and `ReadingList.css`.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)