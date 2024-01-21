import React from 'react'
import { Link } from 'react-router-dom'

const Blogdetail = ({ post }) => {
    return (
        <div className='mt-20'>
            <Link to={`/blog/${post.id}`}>
                <span> {post.title}</span>
            </Link>

            <p>
                By
                <span>
                    {post.author}
                </span>
                on
                <Link to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span>{post.category}</span>
                </Link>
            </p>

            <p>Posted on{post.date}</p>

            <p>{post.content}</p>

            {
                post.tags.map((tag, index) => {
                    return <Link key={index} to={`/tags/${tag.replaceAll(" ", "-")} `}>
                        <span>{`#${tag}`}</span>
                    </Link>
                })
            }
            
                
        </div>
    )
}
export default Blogdetail