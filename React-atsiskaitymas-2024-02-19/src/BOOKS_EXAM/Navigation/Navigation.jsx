import {Link, Route, Routes} from 'react-router-dom';

export const Navigation = () => {

    return (

        <>
        <Link to="/forms">
        <button>Click me to get to forms</button>
      </Link>

      <Link to="/booksPage">
        <button>Click me to get to homepage</button>
      </Link>
      <Link to="/booksPage">
        <button>Click me to get to Books</button>
      </Link>
        </>
    )
}