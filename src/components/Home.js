import React, { useEffect, useState } from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate, } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs";
import axios from 'axios';
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";

function Home() {
  const [empList, setEmpList] = useState([])

  const navigate = useNavigate()

  const add = () => {
    navigate('/addemployee')
  }

  useEffect(() => {
    getData()
  }, [])

  const getData=()=>{
    axios.get("http://localhost:4000/showemployee")
      .then((response) => { setEmpList(response.data.data) })
      .catch((err) => { console.log(err); })
  }

  const handleDelete = (empid) => {
    axios.post("http://localhost:4000/deleteemployee/"+empid)
      .then((response) => { console.log(response);
      getData()})
      .catch((err) => { console.log(err); })
  }

  const handleEdit= (empid)=>{
    navigate('/editemployee/'+empid)

  }
  
  

  return (
    <div id='bod'>
      <h1 id='hd'>List of Employees</h1>
      <Button id='bt' onClick={add} variant="primary" size='lg'><BsPersonFillAdd /></Button>{' '}
      <div id='table'>
        <table id='field'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Designation</th>
              <th>Salary</th>
              <th >Actions</th>
            </tr>
          </thead>
          {
            empList.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.ename}</td>
                  <td>{item.id}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td><Button onClick={(e)=>{handleEdit(item._id)}}><FaUserEdit /></Button>{' '}<Button onClick={(e) => { handleDelete(item._id) }}><TiUserDelete /></Button></td>
                </tr>
              </tbody>
            ))}
        </table>


      </div>

    </div>
  )
}

export default Home
