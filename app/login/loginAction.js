'use server'
import { SignJWT, importJWK } from 'jose'
import { cookies } from 'next/headers'

export async function LoginAction(prevState,FormData){
    const email = FormData.get('email')
    const password = FormData.get('password')
    
    if(email != "a" || password != "1234"){
        return {message : 'Login Fail'} 
    }
    

    //login pass
    console.log(email,password)

    const secretJWK = {
        kty: 'oct',
        k: process.env.JOSE_SECRET // Replace with your actual base64 encoded secret key
      }

      const secretKey = await importJWK(secretJWK, 'HS256')
      const token = await new SignJWT({ email })
                    .setProtectedHeader({ alg: 'HS256' })
                    .setIssuedAt()
                    .setExpirationTime('1h') // Token expires in 1 hour
                    .sign(secretKey)
    
    console.log(token)
    console.log("hello")

      cookies().set('tokenNaja', token)

    return {message: 'Login Success'}
}