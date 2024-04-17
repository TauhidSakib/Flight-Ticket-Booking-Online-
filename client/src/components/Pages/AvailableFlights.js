import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import "./styles/Tables.css";

const AvailableFlights = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const url = "http://localhost:5000/AvailableFlights";
        const response = await Axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching available flights:", error);
      }
    };

    loadData();
  }, []);

  const bookTicket = async (id, airplaneId) => {
    try {
      const response = await Axios.post("http://localhost:5000/bookTicketclient", { client_id: id, airplane_id: airplaneId });
      console.log("Ticket booked successfully");
      console.log("Response from server:", response);
      alert("Ticket booked successfully");
      // You can optionally show a success message to the user
    } catch (error) {
      // Handle errors
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.airport_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-pic">
      <Link to={`/CustomerPanel/${id}`}>
          <button className='btn btn-client' style={{backgroundColor:'blue',color:'white',width:'120px',marginLeft:'760px'}}>Back to Main</button>
        </Link>
    
      <table className="styled-table">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Airport Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
        <thead>
          <tr>
            <th>Max Seats</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Flight Status</th>
            <th>Departure Gate</th>
            <th>Airport Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.max_seats}</td>
              <td>{item.departure_time}</td>
              <td>{item.arrival_time}</td>
              <td>{item.status}</td>
              <td>{item.gate_no}</td>
              <td>{item.airport_name}</td>
              <td>{item.city}</td>
              <td>
                <button
                  className={id > 0 ? "btn btn-book" : "btn btn-login"}
                  style={{ fontSize: "18px" }}
                  onClick={() => bookTicket(id, item.airplane_id)}
                >
                  {id > 0 ? "Book" : "Login"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableFlights;
