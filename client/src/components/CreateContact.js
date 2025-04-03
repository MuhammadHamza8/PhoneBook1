import React, { useState } from 'react';
import Axios from 'axios'







const CreateContact = () => {



  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  
  const addNewNumber = () => {
    Axios.post('http://localhost:8080/api/add-phone',{name,phone})
  }


  return (

    <div className="grid-container">
     <a className='button'  href="/view">view contacts </a>
    <form action="/action_page.php"/>
    <label for="fname">Name </label>
    <input type="text" onChange={(e) => {setName(e.target.value)}}/>

    <label for="lname">Phone number</label>
    <input type="text" onChange={(e) => {setPhone(e.target.value)}}/><br/><br/>


    <button onClick={addNewNumber}  className='addnumber'>Add New Number</button>
  <form/>


  </div>
  );
};

export default CreateContact;

