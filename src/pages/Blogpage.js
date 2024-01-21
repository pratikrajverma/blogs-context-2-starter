import React, {   useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Blogdetail from '../components/Blogdetail';
import { useContext } from 'react';

const Blogpage = () => {

  const [Blog, setBlog] = useState(null);
  const [relatedblog, setrelatedblog] = useState([]);

  const location = useLocation()
  const navigation = useNavigate()
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);



  async function fetchrelatedblogs() {
    setLoading(true);

    const url = `${baseUrl}?blogId=${blogId}`;
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setBlog(data.blog);
      setrelatedblog(data.relatedblog);
    } catch (err) {
      console.log('error he blog id me');
      setBlog(null);
      setrelatedblog(null);
    }

    setLoading(false);
  }



  useEffect(() => {
    if (blogId) {
      fetchrelatedblogs();
    }


    }, [location.pathname])


  return (
    <div>
      <Header />

      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
      </div>

      {
        loading ? (<p>Loading...</p>)
          : (Blog ?
            (
              <div>
                <Blogdetail value={Blog} />
                <h2>Related Blogs</h2>
                {
                  relatedblog.map((post) => {
                    return <Blogdetail key={post.id} post={post} />

                  })               

                }

              </div>
            )

            : (<p>No blog found</p>)


          )
      }

    </div>
  )
}

export default Blogpage