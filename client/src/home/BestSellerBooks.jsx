import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://51.21.2.113:3000/books/").then(res => res.json()).then(data => setBooks(data.payload.slice(1,10)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks