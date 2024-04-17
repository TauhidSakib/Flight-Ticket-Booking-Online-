import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import Sidebar from './Sidebar'
import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";
import MovingText from "react-moving-text";
import './styles/AdminPanel.css';
const AdminPanel = () => {
  const [user,setUser]=useState({});
  useEffect(() => {
    Axios
      .get('http://localhost:5000/getstats')
      .then((resp) => setUser({ ...resp.data[0] }));
      console.log(user.countt)
      console.log(user.summ)
  }, []);
  return (
    <div className='bg-image'>
      <Sidebar/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{backgroundColor:'black', width:'100vw', padding:'10px'}}>

      </div>
      <NavBtn >
          <NavBtnLink to="/">Logout</NavBtnLink>
        </NavBtn>
    </div>
  )
}

export default AdminPanel