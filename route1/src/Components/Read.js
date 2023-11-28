import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { URL } from './Api'

const Read = () => {
    const [apiData, setApiData] = useState([])

    const getData = async() =>{
        const test = await axios.get(URL);
       setApiData(test.data)
    }

    useEffect(()=>{
        getData();

    })
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>FirstName</TableHeaderCell>
                <TableHeaderCell>LastName</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Edit</TableHeaderCell>
                <TableHeaderCell>Delete</TableHeaderCell>
            </TableRow>
        </TableHeader>
{apiData.map(data=>(
    <TableBody>
    <TableRow key={data.id}>
        <TableCell>{data.fname}</TableCell>
        <TableCell>{data.lname}</TableCell>
        <TableCell>{data.checked ? 'Activate' : 'Deactivate'}</TableCell>
        <TableCell><Button>Edit</Button></TableCell>
        <TableCell><Button>Del</Button></TableCell>
    </TableRow>
</TableBody>

))}
        
    </Table>
  )
}

export default Read