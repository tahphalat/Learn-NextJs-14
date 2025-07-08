'use client'
import {useState,useEffect} from 'react'

async function getBlogs(id) {
    const res = await fetch(`https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}


export default  function Page({params}){
    const [blogState,setBlog] = useState({
        name: ''
    })

    const initState = async () => {
        try{
            const blog = await getBlogs(params.slug)
            setBlog(blog)
        } catch(error){
            console.log(error)
        }
    } 

    const handleChange = (e) => {
        const {name,value} = e.target
        setBlog((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Form Submitted', blogState)
        try {
          const response = await fetch(`https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo/${params.slug}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogState)
          })
    
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
    
          const responseData = await response.json()
          console.log('Form submitted successfully', responseData)
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }


    useEffect(()=>{
        initState()
    },[])
    return(
        <div>

            <form onSubmit={handleSubmit}>
                <div>ID: {params.slug}</div>
                <div>Blogs Name: <input type="text" name="name" value={blogState.name} onChange={handleChange} /></div>
                <div>Blogs Status: <input type="text" name="status" value={blogState.status} onChange={handleChange} /></div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' type="submit">Update</button>
            </form>
        </div>
    )
}