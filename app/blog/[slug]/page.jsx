/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
async function getBlogs(id) {
  const res = await fetch(`https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Page({params}){
    const blog = await getBlogs(params.slug)
    return(
        <>
            <div>ID: {params.slug}</div>
            <div>Blogs Name: {blog.name}</div>
            <div>Blogs Name: {blog.status}</div>
        </>
    );
}