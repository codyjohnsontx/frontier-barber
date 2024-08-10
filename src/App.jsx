import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h1>Frontier Mens Grooming Lounge</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/staff">Staff</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="https://book.squareup.com/appointments/bdza2qpljnhhjl/location/LF75YVX8EVB6F/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so">Booking</Link>  
          {/* <Link to="/admin">Admin</Link> */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
