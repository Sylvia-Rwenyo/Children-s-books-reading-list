// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography, TextField, AppBar, Toolbar, Grid, Autocomplete, IconButton, Tooltip } from '@mui/material';
import { Add, KeyboardArrowUp } from '@mui/icons-material';
import { gql, useQuery } from '@apollo/client';
import ReadingList from './ReadingList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

// GraphQL query to fetch books data
const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

// Define custom theme with typography and component settings
const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif', // Use 'Mulish' font for typography
    color: '#335C6E',
    body1: {
      color: '#335C6E',
    },
    body2: {
      color: '#335C6E',
    },
    subtitle1: {
      color: '#335C6E',
    },
    subtitle2: {
      color: '#335C6E',
    },
    h6: {
      color: '#335C6E',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 2px -2px gray',
          width: '100%',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#335C6E',
          color: '#ffffff',
          fontSize: '0.875rem',
        },
      },
    },
    MuiOutlinedInput: {
      color: 'sm={8}',
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#335C6E',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#335C6E',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#335C6E',
          },
        },
      },
    },
  },
});

const App = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY); // Fetch books data using Apollo Client
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [readingList, setReadingList] = useState([]); // State for reading list

  useEffect(() => {
    // Load reading list from local storage on component mount
    const savedReadingList = localStorage.getItem('readingList');
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  useEffect(() => {
    // Save reading list to local storage whenever it changes
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  if (loading) return <p>Loading...</p>; // Display loading message while fetching data
  if (error) return <p>Error: {error.message}</p>; // Display error message if data fetching fails

  // Add book to the reading list, avoiding duplicates
  const handleAddBook = (book) => {
    const isDuplicate = readingList.some(
      (item) => item.title === book.title && item.author === book.author
    );

    if (!isDuplicate) {
      setReadingList([...readingList, book]);
    }
  };

  // Remove book from the reading list
  const handleRemoveBook = (bookTitle) => {
    setReadingList(readingList.filter((book) => book.title !== bookTitle));
  };

  // Filter books based on search term
  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: '0px 4px 2px -2px gray', width: '100%', backgroundColor: '#5ACCCC', padding: '1em' }}>
        <CssBaseline />
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={4} sm={5}>
              <Typography variant="h4" className="header-text" style={{ flexGrow: 1 }}>Reading List</Typography>
            </Grid>
            <Grid item xs={12} md={8} sm={7}>
              <Autocomplete
                freeSolo
                options={filteredBooks}
                getOptionLabel={(option) => option.title}
                renderOption={(props, option) => (
                  <li {...props} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#335C6E' }}>
                    <img src={option.coverPhotoURL} alt={option.title} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <div style={{ flexGrow: 1 }}>
                      <Typography variant="body1">{option.title}</Typography>
                      <Typography variant="body2" color="textSecondary">{option.author}</Typography>
                      <Typography variant="body2" color="textSecondary">{`Reading Level: ${option.readingLevel}`}</Typography>
                    </div>
                    <Tooltip title="Add to reading list" sx={{ background: '#335C6E', opacity: '0.75'}}>
                      <IconButton
                        sx={{ color: '#335C6E', backgroundColor: '#cffafa', borderRadius: '50%' }}
                        onClick={() => handleAddBook(option)}
                      >
                        <Add />
                      </IconButton>
                    </Tooltip>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search Books"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#335C6E',
                        },
                        '&:hover fieldset': {
                          borderColor: '#335C6E',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#335C6E',
                        },
                      },
                    }}
                    style={{ color: "#335C6E", background: "white", borderRadius: '5px' }}
                  />
                )}
                style={{ width: '100%', color: '#335C6E' }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>
        <CssBaseline />
        {readingList.length > 0 ? (
          <ReadingList books={readingList} onRemoveBook={handleRemoveBook} />
        ) : (
          <Typography variant="h6" color="textSecondary" style={{ marginTop: '20px' }}>
            No books added yet. Search for a book to add.
          </Typography>
        )}
      </Container>
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          borderRadius: '0',
          bottom: '0',
          right: '20px',
          backgroundColor: '#5ACCCC',
          color: '#335C6E',
          '&:hover': {
            backgroundColor: '#4AA088',
          },
        }}
      >
        <KeyboardArrowUp />
      </IconButton>
    </ThemeProvider>
  );
};

export default App;
