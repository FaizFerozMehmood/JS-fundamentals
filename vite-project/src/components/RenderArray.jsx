import React, { useState } from 'react'

function RenderArray() {
    const [books, SetBooks] = useState([
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  }
])
  return (
    <div>
        {
            books.map((data,index)=>(
                <div key={index}>
                    <h3> Title :{data.title}</h3>
                    <h4> Author :{data.author}</h4>
                    <h5> Year :{data.year}</h5>
                    <h6> Genre :{data.genre}</h6>
                </div>
            ))
        }
    </div>
  )
}

export default RenderArray
