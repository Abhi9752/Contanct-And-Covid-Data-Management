import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import Data from '../Data';


const Createcontact = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [Status, setStatus] = useState("");
    let history = useNavigate("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let id = uniqueId;
        let firstName = firstname;
        let lastName = lastname;
        let status = Status;
        Data.push({ id, firstName, lastName, status })
        setFirstName("");
        setLastName("");
        history("/")
    }

    return (
        <>
            <div className="card">
                <h1>Contact Page</h1>
                <div className="cardContent">
                    <Sidebar />
                    <div className='right'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" name='firstName' value={firstname} placeholder='First Name' required="required" onChange={(e) => { setFirstName(e.target.value) }} /><br />
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" name='lastName' value={lastname} placeholder='Last Name' required="required" onChange={(e) => { setLastName(e.target.value) }} /><br />
                            <div className="status">
                                <div className='radiolable'>Status</div>
                                <div className='options'>
                                    <input type="radio" id="active" name="status" value="Active" onClick={(e) => { setStatus(e.target.value) }} />
                                    <label htmlFor="active">Active</label><br />
                                    <input type="radio" id="inactive" name="status" value="Inactive" onClick={(e) => { setStatus(e.target.value) }} />
                                    <label htmlFor="inactive">Inactive</label><br /><br />
                                </div>
                            </div>
                            <button type='submit' >Save Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Createcontact