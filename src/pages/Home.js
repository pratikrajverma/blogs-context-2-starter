import React, { useState } from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

 

const Home = () => {

  const[inputtag,setinputtag] = useState('');
 

  return (
    <div>
    
        
      <Header   ></Header> 

        

      <div className='mb-20'>
        <Blogs/>
        <Pagination/>
      </div>

    </div>
  )
}

export default Home 