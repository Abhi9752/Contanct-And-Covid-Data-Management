import React from 'react'
import Data from '../Data';
import { Link, useNavigate } from 'react-router-dom';

const Contactcard = () => {

  let history = useNavigate();

  const handleEdit = (id , firstName , lastName , Status) => {
    localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('status',Status);
    localStorage.setItem('id',id);
  }

  const handleDelete = (id) => {
    let index = Data.map((ele)=>{
      return ele.id
    }).indexOf(id)
    Data.splice(index,1);
    history("/");
  }

  return (
    <div class="table-responsive">
      <table id='customers'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.length > 0 ?
            Data.map((ele)=>{
              return (
                <tr key={ele.id}>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.status}</td>
                  <td>
                    <Link to="/edit">
                      <button onClick={() => handleEdit(ele.id,ele.firstName,ele.lastName,ele.status)}>EDIT</button>
                    </Link>
                    &nbsp;
                    <button onClick={() => handleDelete(ele.id)}>DELETE</button>
                  </td>
                </tr>
              )
            }):
            <tr>
              <td colSpan="4">No Data Available</td>
            </tr>
          }
        </tbody>
      </table> 
    </div>
  )
}

export default Contactcard
