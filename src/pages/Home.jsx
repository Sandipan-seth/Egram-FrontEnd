import React, { useContext, useEffect } from 'react'
import Banner from '../components/Banner'
import userContext from '../contexts/UserContext'

const Home = () => {


  useEffect(()=>{
    scrollTo(0,0)
  },[])

  return (
    <div>
      <Banner />
    
    </div>
  )
}

export default Home
