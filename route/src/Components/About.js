import React from 'react'
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom'

const About = () => {

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

      <TableBody>
        <TableRow>
          <TableCell>Jagadeesh</TableCell>
          <TableCell>M</TableCell>
          <TableCell>True</TableCell>
          <TableCell><Button>Edit</Button></TableCell>
          <TableCell><Button>Remove</Button></TableCell>
        </TableRow>
      </TableBody>
      
    </Table>

    <button onClick={b}>Back</button>
  </div>
  )
}

export default About