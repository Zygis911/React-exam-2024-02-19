import { Book } from "./Book";
import axios from "axios";
import { useEffect, useState } from "react";


export const BooksPage = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books")
        .then((response) => {
          console.log("Response data:", response.data); // Debugging: log response data
          setBooks(response.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    console.log("Books:", books); // Debugging: log books state
  
    return (
      <>
        <h1 style={{position: "sticky"}}>Books list</h1>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            price={book.price}
            cover={book.cover}
            images={book.images}
          />
        ))}
      </>
    );
  };