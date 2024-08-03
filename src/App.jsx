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
          <Link to="/booking">Booking</Link> | 
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
