import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [data, setdata] = useState(0)
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'deepskyblue'}}>
      <Toolbar>
        <Typography>
          <AnalyticsIcon />
        </Typography>

        <Tabs textColor='inherit' sx={{ ml: 'auto' }} indicatorColor='secondary' value={data}
          onChange={(e, val) => setdata(val)}>
          <Tab LinkComponent={NavLink} to='/home' label='Home' />
          <Tab LinkComponent={NavLink} to='/about' label='About' />
          <Tab LinkComponent={NavLink} to='/services' label='Services' />
          <Tab LinkComponent={NavLink} to='/contactus' label='Contact Us' />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header