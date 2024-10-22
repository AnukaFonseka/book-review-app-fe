import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://51.21.2.113:3000/books/").then(res => res.json()).then(data => setBooks(data.payload.slice(9,20)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="New Arrivals"/>
    </div>
  )
}

export default OtherBooks