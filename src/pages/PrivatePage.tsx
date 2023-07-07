import React, { useContext } from 'react'
import { Button } from '@mui/material'
import AuthContext from '../context/AuthContext'

const PrivatePage = (): JSX.Element => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div>
        <p>{user?.email}</p>
        <Button variant="contained" onClick={logOut}>LogOut</Button>
    </div>
  )
}

export default PrivatePage
