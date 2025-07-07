'use server'
export async function SubmitData(formData){
    console.log(formData.get('email'))
}