import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AllForms } from "./BOOKS_EXAM/AllForms";
import { Book } from "./BOOKS_EXAM/Book";
import { Navigation } from "./BOOKS_EXAM/Navigation/Navigation";
import { BooksPage } from "./BOOKS_EXAM/BooksPage";


function App() {
  return (
    <>
      
      <Routes>
        <Route path='booksPage' element={<BooksPage />} />
        <Route path="" element={<Navigation />} />
        <Route path="/homepage" element={<Book />} />

        <Route path="/forms" element={<AllForms />} />
      </Routes>
    </>
  );
}

export default App;
