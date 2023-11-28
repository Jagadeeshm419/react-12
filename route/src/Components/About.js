import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Button, Card } from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom'
import { URL } from './api';
import axios from 'axios';
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

const About = () => {
  const [apiData, setapiData] = useState([])

  const a = useNavigate();

  const getData = async() => {
      const fun = await axios.get(URL)
      setapiData(fun.data)
    }
    useEffect(()=>{
      getData();
    })

    const upData = async({firstname, lastname, check, id}) =>{
      localStorage.setItem('id', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('lastname', lastname)
      localStorage.setItem('check', check)

      a('/edit')
    }
 
    const b = ()=>{
      a('/home')
    }

    const delData = async(id)=>{
      await axios.delete(`https://655ee20d879575426b44179a.mockapi.io/Data/${id}`) 
    }
     
  return (
  <div>  
    <Table>

      <TableHeader>
        <TableRow>
          <TableHeaderCell>First Name</TableHeaderCell>
          <TableHeaderCell>User Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
          <TableHeaderCell>Delete</TableHeaderCell>
        </TableRow>
      </TableHeader>

      {apiData.map(data => (
        <TableBody>
        <TableRow key={data.id}>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.check ? 'Active' : 'Inactive'}</TableCell>
          <TableCell><MdEdit className='style' onClick={()=>upData(data)}/></TableCell>
          <TableCell><BiSolidTrashAlt className='style' onClick={()=>delData(data.id)}/></TableCell>
        </TableRow>
      </TableBody>
      ))}  

    </Table>
  
    {/* {apiData.map(data => (
      <Card>
      <Card.Content key={data.id}>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{data.firstname}</Card.Header>
        <Card.Meta>{data.lastname}</Card.Meta>
        <Card.Description>
          {data.firstname} wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='blue'><MdEdit /></Button>
          <Button basic color='red'><BiSolidTrashAlt /></Button>
        </div>
      </Card.Content>
    </Card>
      ))}  */}

    <button onClick={b}>Back</button>
  </div>
  )
}

export default About