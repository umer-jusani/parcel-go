import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
