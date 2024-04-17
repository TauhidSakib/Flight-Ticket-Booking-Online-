import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavMenu, NavBtn, NavBtnLink } from '../Navbar/NavbarElements';
import { useParams } from 'react-router-dom';

const CustomerNavbar = () => {
  const { id } = useParams();
  
  return (
    <Nav>
      <NavMenu>
        <NavLink to={`/ViewProfile/${id}`} activeClassName="active-link">
          View Profile
        </NavLink>
        <NavLink to={`/availableFlights/${id}`} activeClassName="active-link">
          Book Flight
        </NavLink>
        <NavLink to={`/ViewCustomerTickets/${id}`} activeClassName="active-link">
          View Tickets
        </NavLink>
        <NavLink to={`/AddReviews/${id}`} activeClassName="active-link">
          Add Review
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/' style={{ marginLeft: '550px' }}>Logout</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default CustomerNavbar;
