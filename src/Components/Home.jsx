import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Button } from '@mui/material'

const Home = () => {
  return (
    <div>
      <Button>
        <Link to="/login">Click here to Login</Link>
      </Button>
    </div>
  )
}

export default Home
