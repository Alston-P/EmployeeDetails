import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs";

function Home() {
  const navigate = useNavigate()
  const add = () => {
    navigate('/addemployee')
  }
  return (
    <div id='bod'>
      <h1 id='hd'>List of Employees</h1>
      <Button id='bt' onClick={add} variant="primary" size='lg'><BsPersonFillAdd /></Button>{' '}

    </div>
  )
}

export default Home
