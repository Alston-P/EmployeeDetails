import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import './AddEmployee.css'
import { useNavigate, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


function EditEmployee() {
    const [ename, setEname] = useState('');
    const [id, setId] = useState('')
    const [designation, setDesignation] = useState('')
    const [salary, setSalary] = useState('')

    const params = useParams()
    // console.log(params.id, "Id");
    // console.log(params, "params");





    useEffect(() => {
        axios.get("http://localhost:4000/fetchemployee/" + params.id)
            .then((response) => {
                console.log(response.data.data);
                const { ename, id, designation, salary } = response.data.data;
                setEname(ename);
                setId(id);
                setDesignation(designation);
                setSalary(salary);
            })
            .catch((err) => { console.log(err); })
    },[])


const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.put("http://localhost:4000/updateemployee/" + params.id, { ename, id, designation, salary })
        alert("Data is saved")
    }
    catch (err) { console.log(err); }
}

const navigate = useNavigate()
const back = () => {
    navigate('/')
}

return (
    <div id='full'>
        <h1 id='reg'>Edit Employee Details</h1>
        <Form id='form'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control type="text" name='ename' value={ename} onChange={(e) => setEname(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridId">
                    <Form.Label>Employee Id</Form.Label>
                    <Form.Control type="text" name='id' value={id} onChange={(e) => setId(e.target.value)} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridDesignation">
                <Form.Label>Employee Designation</Form.Label>
                <Form.Control type="text" name='designation' value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridSalary">
                <Form.Label>Employee Salary</Form.Label>
                <Form.Control type="text" name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>{' '}
            <Button onClick={back} variant="primary">Back</Button>{' '}

        </Form>
    </div>
)
}

export default EditEmployee
