import { jwtVerify, importJWK } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    const token = request.cookies.get("tokenNaja")?.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET, // Replace with your actual base64 encoded secret key
    };
    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);
    console.log(token);
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// if user enter "/about" web will lead user redirect to "/home" (according to middleware function)
export const config = {
  matcher: "/manage/blog/:path*",
};
