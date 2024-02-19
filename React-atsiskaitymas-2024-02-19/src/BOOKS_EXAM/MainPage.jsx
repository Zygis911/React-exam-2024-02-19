// COURSE REGISTRATION FIELD

import './style.css'
import { useState } from "react";

export const MainPage = () => {

    const [form, setForm] = useState({
        name: "",
        firstname:'',
        email: "",
        message: "",
        date: '',
      });
      
      const [errorMessage, setErrorMessage] = useState('')
    
      const handleForm = (event) => {
            // event.target.value event.target.name     // email arba name    // reiksme, kuria ivedziau i fielda
            setForm((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}))
            if(event.target.name ==='name' && event.target.value.length < 2) {
                setErrorMessage('Reikalingi daugiau nei du zenklai');
            } else {
                setErrorMessage('')
            }
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Aciu,  ${form.name} ${form.firstname}, jusu atsiliepima gavome `);
      };
    
      return (
        <>
          <h2>Course registration field</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
               1. Name:
              <input type="text" name='name' value={form.name} onChange={handleForm}/>
              2. Firstname: <input type='text' name='firstname' value={form.firstname} onChange={handleForm}></input>
              <p>{errorMessage}</p>
            </label>
            <label>
              Email:
              <input type="email" name='email' value={form.email} onChange={handleForm} />
            </label>
            <br></br>
            <label>
              <h5>Can you tell us your birthdate:</h5>
              <input type="date" name='date' value={form.date} onChange={handleForm} />
            </label>
            <button type='submit'>Submit</button>
          </form>
          <p> {form.name} {form.email}</p>
        </>
      );
    };

