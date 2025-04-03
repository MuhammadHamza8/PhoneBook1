import React from 'react';

const CreateContact = () => {
  return (

    <div className="grid-container">
     <a className='button'  href="/view">view contacts </a>
    <form action="/action_page.php"/>
    <label for="fname">Name </label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Phone number</label>
    <input type="text" id="fname" name="firstname" placeholder="Your Number"/>

    <button className='addnumber'>Add New Number</button>
  <form/>


  </div>
  );
};

export default CreateContact;

