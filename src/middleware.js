import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  // Step 1: Get the session token from cookies
  const token = cookies(request).get('next-auth.session-token')
  
  // Step 2: Log the token for debugging purposes
  console.log(token)

  // Step 3: Check if the token exists
  if (!token) {
    // Step 4: If no token is present, redirect to sign-in page
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  
  // Step 5: If token exists, allow the request to proceed
  return NextResponse.next();
};

// Step 6: Configure the middleware to run only for specific routes
export const config = {
  matcher: ["/about"],
};
