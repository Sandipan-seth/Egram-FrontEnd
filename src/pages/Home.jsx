import React, { useEffect } from 'react'
import Banner from '../components/Banner'

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
