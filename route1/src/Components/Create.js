import axios from 'axios'
import React, { useState } from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import { URL } from './Api'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [checked, setchecked] = useState(false)

    const nav = useNavigate();

    const postData = async() =>{
        await axios.post(URL,{
            fname,
            lname,checked
        })
        nav('/read')

    }
  return (
    <Form>
        <Form.Field>
            <input placeholder='Fname' value={fname} onChange={event=>setfname(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <input placeholder='Lname' value={lname} onChange={event=>setlname(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Apply' checked={checked} onChange={()=>setchecked(!checked)}/>
        </Form.Field>
        <Button onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create