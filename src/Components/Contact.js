import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Contactcard from './Contactcard';

const Contact = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <div className="card">
        <h1>Contact Page</h1>
        <div className="cardContent">
          {/* Pass the props down to the Sidebar component */}
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          <div className="right">
            <Link className="create-contact-btn" to="/create">
              <button className="linktag">Create Contact</button>
            </Link>
            <div className="profile">
              <Contactcard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
