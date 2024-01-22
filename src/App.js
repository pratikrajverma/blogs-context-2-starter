import "./App.css";
import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Blogpage from "./pages/Blogpage";
import Categorypage from "./pages/Categorypage";
import Tagpage from "./pages/Tagpage";

export default function App() {
  
  const { fetchBlogPosts } = useContext(AppContext);
  const[searchParams,setsearchParams] = useSearchParams(); 
  const location = useLocation()
 
  useEffect(() => {
      const page = searchParams.get("page") ?? 1;
   
      
      if(location.pathname.includes("tags"))
      { 
         
        const tag = location.pathname.split("/").pop().replaceAll(" ","-");
        fetchBlogPosts(Number(page), tag);
      }
      else if(location.pathname.includes("categories"))
      {
        const category = location.pathname.split("/").at(-1).replaceAll(" ","-");
        fetchBlogPosts(Number(page), null, category);
      }else{
        fetchBlogPosts(Number(page)); 
      }

  }, [location.pathname, location.search]);




  return (

    
     
  
      <Routes>
        
        <Route path="/"  element={<Home/>} />
        <Route path="/blog/:blogId"  element={<Blogpage/>} />
        <Route path="/tags/:tag"  element={<Tagpage/>} />
        <Route path="/categories/:category" element={<Categorypage/>}/>
      </Routes>
    
    


      
   
  );
}
