import React from "react";


const ViewContact=()=>{

return(

<div className="grid-container">

<h2>Contact List</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>
      
      <button class="button button3">Delete</button>

      <button  class="button button3">Update</button>
    
    
    </td>
  </tr>

</table>


</div>

);



}

export default ViewContact;