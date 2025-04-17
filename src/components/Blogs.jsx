import React from 'react'
import { BlogCard } from './Cards.jsx'
import {MainHeading, Tagline} from './elementComp.js'

export default function Blogs() {


  return (
    <div className="container-fluid  w-100">
      <div className="blogs-section mx-auto">

        <MainHeading value={"Recent Blogs"} className={"text-center"} /> 
        
      <Tagline className={"text-center"} />
        <div className="row gx-3 gy-4 mt-5">
          {/* col 1 */}
          {(blogs || []).map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
         
        </div>
      </div>
    </div>
  )
}

const blogs = [
  {title: "The Role of Technology In Modern...", date: "May 10, 2023", image: "./clients/blogs/1.webp"},
  {title: "The Servics Provide For Design...", date: "May 13, 2023", image: "./clients/blogs/2.webp"},
  {title: "Digital Market To Their New Office...", date: "May 15, 2023", image: "./clients/blogs/3.webp"},
]