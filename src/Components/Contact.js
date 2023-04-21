import React from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Contactcard from './Contactcard';

const Contact = () => {
    return (
        <>
            <div className="card">
                <h1>Contact Page</h1>
                <div className="cardContent">
                    <Sidebar />
                    <div className='right'>
                        <Link className="create-contact-btn" to="/Contanct-And-Covid-Data-Management/create" >
                            <button className='linktag'>Create Contact</button>
                        </Link>
                        <div className="profile">
                            <Contactcard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;