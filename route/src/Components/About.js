import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom'
import { URL } from './api';
import axios from 'axios';
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";


const About = () => {
  const [apiData, setapiData] = useState([])

  const getData = async() => {
      const fun = await axios.get(URL)
      setapiData(fun.data)
    }

    useEffect(()=>{
      getData();
    })
 
  const a = useNavigate();

  const b = ()=>{
    a('/home')
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
        <TableRow>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.check ? 'Active' : 'Inactive'}</TableCell>
          <TableCell><Button><MdEdit /></Button></TableCell>
          <TableCell><Button><BiSolidTrashAlt /></Button></TableCell>
        </TableRow>
      </TableBody>
      ))}  

    </Table>

    <button onClick={b}>Back</button>
  </div>
  )
}

export default About