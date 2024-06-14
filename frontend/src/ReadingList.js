// src/ReadingList.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { Remove } from '@mui/icons-material';
import './ReadingList.css';

// Functional component to display the reading list
const ReadingList = ({ books, onRemoveBook }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
      <Grid item xs={12} sm={6} md={4} key={`${book.title}-${book.author}`}>
        <Card className="book-card">
          {/* Display book cover */}
          <CardMedia
            component="img"
            height="160"
            image={`${book.coverPhotoURL}`}
            alt={book.title}
          />
          <CardContent>
            {/* Display book title */}
            <Typography variant="h6" className="book-title">{book.title}</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {/* Display book author and reading level */}
                <Typography variant="subtitle1">{`By ${book.author}`}</Typography>
                <Typography variant="subtitle2">{`Reading Level: ${book.readingLevel}`}</Typography>
              </div>
              {/* Button to remove book from reading list */}
              <Tooltip title="Remove from reading list">
                <IconButton sx={{ color: '#F76434', backgroundColor: '#FFE6DC', borderRadius: '50%' }} onClick={() => onRemoveBook(book.title, book.author)}>
                  <Remove />
                </IconButton>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default ReadingList;
