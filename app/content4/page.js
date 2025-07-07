"use client";
import { useEffect, useState } from "react";

async function getBlogs() {
  const res = await fetch( "https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Content4() {
  const [blogState, setBlogState] = useState([]);
  const [loading,setLoading] = useState(true);

  const FetchData = async () => {
    try {
      const result = await getBlogs();
    } catch (err) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    FetchData()
    .then((result)=>setBlogState(result))
    .catch((error)=>console.log('error',error))
    .finally(()=> setLoading(false))
  }, []);
  console.log("blogState", blogState);

  if(loading) return <div>Loading...</div>

  return (
    
    <Suspense fallback={<Loading/>}>
        <div>
        {blogState.map((blog, index) => (
            <div key={index}>
            {blog.name}
            {blog.id}
            </div>
        ))}
        </div>
    </Suspense>
  );
}
