export default function Page({params}){
    return(
        <div> This is : {params.slug} 
            <div>
                and ID : {params.id}
            </div> 
        </div>
    );
}