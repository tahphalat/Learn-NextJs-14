export async function GET(request,{params}){
    console.log("test GET")
    return Response.json({
        name:'Tom',
        id: params.id
    })
}