import React, { useState, useEffect} from 'react'

const Admin = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
        const response = await fetch('localhost:5000/api/bookings')
        const data = await response.json()
        setBookings(date)
    }

    fetchBookings()
  },[])


    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ui>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.email} - {new Date(booking.date).
                        toLocaleDateString()} - {booking.service} - {booking.stylist}

                    </li>
                ))}
                    
            </ui>
        </div>
    
  )
}

export default Admin