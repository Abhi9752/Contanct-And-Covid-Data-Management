import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='left'>
                <Link to="/"> <button className='btn'>Contact Page</button></Link>
                <Link to="/maps"><button className='btn'>Charts And Maps</button></Link>
            </div>
        </>
    )
}
export default Sidebar