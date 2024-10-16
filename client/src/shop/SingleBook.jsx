import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
    const { id } = useParams(); // Get the book id from the URL params
    const [book, setBook] = useState(null); // State to store the fetched book data
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        // Fetch book data by id
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data.payload); // Set book data from the response payload
                setLoading(false); // Stop loading when the data is fetched
            })
            .catch(error => {
                console.error("Error fetching book data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
            <img 
                src={book.imageURL} 
                alt={book.bookTitle} 
                className='w-full h-80 object-cover rounded-lg'
            />
            <h2 className='text-2xl font-bold'>{book.bookTitle}</h2>
            <p className='text-gray-700'>Author: {book.autherName}</p>
            <p className='text-gray-500'>{book.category}</p>
            <p className='mt-4'>{book.bookDiscription}</p>
            <a 
                href={book.bookPDFURL} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-blue-600 hover:underline'
            >
                View Book PDF
            </a>
        </div>
    );
};

export default SingleBook;
