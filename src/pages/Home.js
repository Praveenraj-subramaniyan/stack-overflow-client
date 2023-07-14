import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import HomeMainBar from '../components/HomeMainBar'
import RightSideBar from '../components/RightSideBar'

function Home() {
  return (
    <div className='containerHome mt-5'>
      <div className='leftsidebarHome'>
       <LeftSideBar/>
      </div>
      <div className='mainrightbarHome'>
      <HomeMainBar/>
      <RightSideBar/>
    </div>
    </div>
  )
}

export default Home
