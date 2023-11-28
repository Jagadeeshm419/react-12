import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {Checkbox, Form, Button} from 'semantic-ui-react'
import axios from 'axios';
import { useState } from 'react';


const Edit = () => {

  const [id, setid] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [check, setcheck] = useState(false)

  const n = useNavigate();

  const upData1 = async() =>{
    await axios.put(`https://655ee20d879575426b44179a.mockapi.io/Data/${id}`, {
      id,
      firstname,
      lastname,
      check,
    })
    n('/about')
  }

  useEffect(()=>{
    setid(localStorage.getItem('id', id))
    setfirstname(localStorage.getItem('firstname', firstname))
    setlastname(localStorage.getItem('lastname', lastname))
    setcheck(localStorage.getItem('check', check))
  },[])

  return (
    <Form>
      <Form.Field>
        <label>First Name : </label>
        <input placeholder='First Name' value={firstname} onChange={e=>setfirstname(e.target.value)}/>
      </Form.Field>
    <Form.Field>
        <label>Last Name : </label>
        <input  placeholder='Last Name' value={lastname} onChange={e=>setlastname(e.target.value)}/>
      </Form.Field>
    <Form.Field>
        <Checkbox label='Terms & Conditions' checked={check} onChange={()=>setcheck(!check)}/>
      </Form.Field>
    <Button onClick={upData1}>Submit</Button>
    </Form>
  )
}

export default Edit