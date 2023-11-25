import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Checkbox, Form, Button} from 'semantic-ui-react'
import axios from 'axios';
import { useState } from 'react';
import { URL } from './api';


const Home = () => {

  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [check, setcheck] = useState(false)

  const n = useNavigate();

  const send = async() =>{
    await axios.post(URL, {
      firstname,
      lastname,
      check
    })

    n('/about')
  }
  return (
    <div>
      <h1>SIGN IN</h1>
        <Form>
          <Form.Field>
            <label>First Name : </label>
            <input className='a' placeholder='First Name' value={firstname} onChange={e=>setfirstname(e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Last Name : </label>
            <input className='a' placeholder='Last Name' value={lastname} onChange={e=>setlastname(e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <Checkbox label='Terms & Conditions' checked={check} onChange={()=>setcheck(!check)}/>
          </Form.Field>

          <Button onClick={send}>Submit</Button>
        </Form>
    </div>
  )
}

export default Home