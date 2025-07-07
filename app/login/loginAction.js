'use server'
export async function LoginAction(FormData){
    const email = FormData.get('email')
    const password = FormData.get('password')

    console.log(email,password)
}