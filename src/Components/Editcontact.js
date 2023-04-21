import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import Data from '../Data';

const Editcontact = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [Status, setStatus] = useState("");
    const [id, setId] = useState(0);
    let history = useNavigate();

    let index = Data.map((ele)=>{
        return ele.id
      }).indexOf(id)

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(index)
        let element = Data[index] 
        element.firstName = firstname;
        element.lastName = lastname;
        element.status = Status;
        history("/Contanct-And-Covid-Data-Management")
      }

      useEffect(() => {
        setFirstName(localStorage.getItem('firstName') || '');
        setLastName(localStorage.getItem('lastName') || '');
        setStatus(localStorage.getItem('status') || '');
        const storedId = localStorage.getItem('id');
        setId(storedId || '');
      }, []);

  return (
    <>
            <div className="card">
                <h1>Contact Page</h1>
                <div className="cardContent">
                    <Sidebar />
                    <div className='right'>
                        <form >
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" name='firstName' value={firstname} placeholder='First Name' required="required" onChange={(e) => { setFirstName(e.target.value) }} /><br />
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" name='lastName' value={lastname} placeholder='Last Name' required="required" onChange={(e) => { setLastName(e.target.value) }} /><br />
                            <div className="status">
                                <p>Status</p>
                                <input type="radio" id="active" name="status" value="Active" onClick={(e) => { setStatus(e.target.value) }} />
                                <label htmlFor="html">Active</label><br />
                                <input type="radio" id="inactive" name="status" value="Inactive" onClick={(e) => { setStatus(e.target.value) }} />
                                <label htmlFor="css">Inactive</label><br /><br />
                            </div>
                            <button type='submit' onClick={(e)=>{handleSubmit(e)}}>Update Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Editcontact