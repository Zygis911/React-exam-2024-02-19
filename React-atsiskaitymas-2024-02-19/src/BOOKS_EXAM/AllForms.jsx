import { Book } from "./Book";
import {Link, Route, Routes} from 'react-router-dom';

import { MainPage } from "./MainPage";

export const AllForms = () => {
  return (
    <>
      <Book />
      <MainPage />
      {/* <Link to="/homepage">
        <button>Click me to get to homepage</button>
      </Link>
        <Link to="/booksPage">
        <button>Click me to get to Books</button>
      </Link> */}

    </>
  );
};
