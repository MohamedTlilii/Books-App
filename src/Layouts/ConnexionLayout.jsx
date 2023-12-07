import React from 'react'
import ConnexionNavBar from '../Components/ConnexionNavBar'
import { Outlet } from 'react-router-dom'
function ConnexionLayout() {
  return (
    <div>
      <ConnexionNavBar/>
      <Outlet/>
    </div>
  )
}

export default ConnexionLayout