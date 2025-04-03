import React, { useEffect , useState} from 'react';
import Axios from 'axios'





const ViewContact=()=>{


  const [phonebook, setPhonebook] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8080/api/get-phone').then(res => {
      setPhonebook(res.data.data.phoneNumbers)
    })
  },[])




  // delete Phone number 

  const deletePhone = (id) => {
    Axios.delete(`http://localhost:8080/api/delete-phone/${id}`)
  }


return(

  

<div className="grid-container">

<h1>PhoneBook List</h1>


<table>
  <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Action</th>
  </tr>

  {
    

        phonebook.map((val,key) => {
          return  <tr>
          <td>{val.name}</td>
          <td>{val.phone}</td>
      
     
          <td>
            
            <button class="button button3">Update</button>
      
            <button onClick={() =>{deletePhone(val._id)}} class="button button3">Delete</button>
          
          
          </td>
        </tr>

        })

        
      }

 

</table>


</div>

);



}

export default ViewContact;