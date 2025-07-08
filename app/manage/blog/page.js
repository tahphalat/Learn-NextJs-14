import { headers } from 'next/headers'
import Link from 'next/link'
async function getBlogs() {
    const res = await fetch(`https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}
export default async function Page(){
    const header = await headers()
    const user = JSON.parse(header.get('Authorization'))
    const blogs = await getBlogs()
    return(
        <div>
            <div>Hi</div>
            {user.email}

            {blogs.map((blog,index) => (
                <div keu={index}>
                    <div >{blog.name} - {blog.status}</div>
                    <Link className='px-4 py-2 text-blue-500' href={`/manage/blog/${blog.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    );
}