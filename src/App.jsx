import React, { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      name,
      email,
      phone,
    }).then(response => {
      console.log(response);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      event.target.reset()
      setMessage("User " + name + " has been added successfully");
    }).catch(error => {
      console.error(error);
    })
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Name"
          name='name'
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name='phone'
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Add User</button>
      </form>
        <p>{message}</p>

    </>
  )
}

export default App
