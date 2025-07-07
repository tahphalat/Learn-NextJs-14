async function getBlogs() {
  const res = await fetch('https://6856ded81789e182b37f4360.mockapi.io/api/v1/todo')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Content3(){

    const blogs = await getBlogs()
    console.log('Fetchdata ', blogs)
    return(
        <div>
            {
                blogs.map((e, index) =>{
                    return(
                        <div key={index}>
                            {e.name} <br/> {e.id} <br/> {e.status}
                        </div>
                    )
                    
                })
            }
        </div>
    );
}