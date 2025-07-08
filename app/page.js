/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch("https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default function Page() {
  const [blogState, setBlogState] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    try {
      const result = await getBlogs();
      setBlogState(result);
    } catch (err) {
      console.log("err", err); 
    }
  };

  useEffect(() => {
    FetchData()
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      {blogState.map((blog, index) => (
        <div key={index}>
          {blog.name} - {blog.id}
          <Link href={`/blog/${blog.id}`} className="px-4 bg-blue-400 cursor-pointer">Go to read blog...</Link>
        </div>
      ))}
    </div>
  );
}
