import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({ showSidebar, setShowSidebar }) => {

    function myFunction(e) {
        e.preventDefault();
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if ((event.target.matches('.dropbtn')) || (event.target.matches('.dropbtn'))) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <>
            <div className="left">
                <a href='#' onClick={(e) => myFunction(e)} className="dropbtn"><i className="fa fa-bars icon"></i></a>
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/">
                        <button className="btn">Contact Page</button>
                    </Link>
                    <Link to="/maps">
                        <button className="btn">Charts And Maps</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
