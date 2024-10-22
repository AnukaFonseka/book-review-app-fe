import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://51.20.82.6:3000/books/").then(res => res.json()).then(data => setBooks(data.payload.slice(1,10)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="New Arrivals"/>
    </div>
  )
}

export default OtherBooks