import React from 'react'
import { StaticsCard } from '../../components/AdminComponents/Material/StaticsCard'

const Dashboard = () => {
  return (
    <>
    <div>
     <p> Dashboard</p>
      <p>Blog Overview</p>
      </div>
      <div className='flex justify-evenly'>
        <StaticsCard/>
        <StaticsCard/>
        <StaticsCard/>
        <StaticsCard/>
    </div>
    </>
    
  )
}

export default Dashboard