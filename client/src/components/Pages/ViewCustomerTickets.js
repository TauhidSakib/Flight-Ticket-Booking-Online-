// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams,Link } from "react-router-dom";

// Define the ViewCustomerTickets component
const ViewCustomerTickets = () => {
  // State to store client ID and tickets
  const [clientId, setClientId] = useState(null);
  const [tickets, setTickets] = useState([]);
  const { id } = useParams(); // Get the client ID from URL params

  // Effect hook to fetch tickets when component mounts or client ID changes
  useEffect(() => {
    // Extract client ID from the URL
    setClientId(id);

    // Fetch tickets for the client ID
    const fetchTickets = async () => {
      try {
        const response = await Axios.get(`http://localhost:5000/customerbookings/${id}`);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, [id]); // Dependency array ensures useEffect runs when ID changes

  return (
    <div>
      <div className="bg-tasweer">
        <Link to={`/CustomerPanel/${id}`}>
          <button className='btn btn-client' style={{backgroundColor:'blue',color:'white',width:'120px',marginLeft:'760px'}}>Back to Main</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign:'center'}}>S. No</th>
              <th style={{textAlign:'center'}}>Airport Code</th>
              <th style={{textAlign:'center'}}>First Name</th>
              <th style={{textAlign:'center'}}>Last Name</th>
              <th style={{textAlign:'center'}}>Flight No</th>
              <th style={{textAlign:'center'}}>Seat No</th>
              <th style={{textAlign:'center'}}>Gate No</th>
              <th style={{textAlign:'center'}}>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => ( // Change 'data' to 'tickets'
              <tr key={index} style={{backgroundColor:'white'}}>
                <th scope='row'>{index + 1}</th>
                <td>{item.airport_code}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.flight_no}</td>
                <td>{item.seat_no}</td>
                <td>{item.gate_no}</td>
                <td>{item.departure_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCustomerTickets;

 