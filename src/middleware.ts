import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { LOGIN, PROTECTED_SUB_ROUTES, PUBLIC_ROUTES, ROOT } from "./lib/routes";

const { auth } = NextAuth(authConfig);

import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();

  //   const isAuthenticated = session?.user ? true : false;
  const isAuthenticated = !!session?.user;
  // Check if the request is for a public route
  // and not a protected sub-route
  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname === ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  // If not authenticated and not a public route, redirect to the login page
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, request.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
