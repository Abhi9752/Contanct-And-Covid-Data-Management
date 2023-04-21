import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='left'>
                <Link to="/Contanct-And-Covid-Data-Management"> <button className='btn'>Contact Page</button></Link>
                <Link to="/Contanct-And-Covid-Data-Management/maps"><button className='btn'>Charts And Maps</button></Link>
            </div>
        </>
    )
}
export default Sidebar