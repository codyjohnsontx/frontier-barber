import React from 'react'
import Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom'

const services = [
    '10min Neck Massage',
    'Facial',
    'Eyebrow Waxing',
    'Ear Waxing',
    'Nose Waxing',
    'Neck Shave',
    'Mens Haircut',
    'Kids Haircut',
    'Beard Trim',
    'Face Shave'
];

const Booking = () => {
  return (
    <div>
        <h2>Book and Appointment</h2>
        <form onSubmit={handleSubmit} action="">
            
            <label htmlFor="name">Name</label>
            <input type="text" 
            id='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            />
            <label htmlFor="email">Email</label>
            <input type="text" 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            {/* Calender Component goes here */}
            
            <label htmlFor="services">Services</label>
            <select name="" 
            id="service" 
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            >
                <option value="" disabled>Select a service</option>
                {services.map((service,index) => (
                    <option key={index} value={service}>service</option>
                ))}
            </select>
            <label htmlFor="stylist">Stylist: </label>
            <select name="" 
            id="stylist" 
            value={stylist}
            onChange={(e) => setStylist(e.target.value)}
            required
            >
            </select>
        </form>
    </div>
  )
}

export default Booking;