import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Tagpage = () => {

  const navigation = useNavigate()
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className=''>
        <Header />
        <div className='mt-20'>
          <button onClick={()=> navigation(-1)}>
            Back
          </button>
          <h2>
            Blogs Tag <span>#{tag}</span>
          </h2>
        </div>

        <Blogs/>
        <Pagination/>


    </div>

  )
}

export default Tagpage