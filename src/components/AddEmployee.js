import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './AddEmployee.css'
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function AddEmployee() {
  const [empData, setEmpData] = useState({
    ename: '',
    id: '',
    designation: '',
    salary: ''
  });
  const handleChange = (e) => {
    setEmpData({
      ...empData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:5010/addemployee",).then((response) => { console.log(response) })
    console.log(empData);
    // setEmpData({
    //   ename: '',
    //   id: '',
    //   designation: '',
    //   salary: ''
    // })
  }

  const navigate = useNavigate()
  const back = () => {
    navigate('/')
  }
  return (
    <div id='full'>
      <h1 id='reg'>Enter Employee Details</h1>
      <Form id='form'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" name='ename' value={empData.ename} onChange={handleChange} placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control type="text" name='id' value={empData.id} onChange={handleChange} placeholder="Enter employee id" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDesignation">
          <Form.Label>Employee Designation</Form.Label>
          <Form.Control type="text" name='designation' value={empData.designation} onChange={handleChange} placeholder="Enter designation" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridSalary">
          <Form.Label>Employee Salary</Form.Label>
          <Form.Control type="text" name='salary' value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>{' '}
        <Button onClick={back} variant="primary">Back</Button>{' '}

      </Form>
    </div>
  )
}

export default AddEmployee
