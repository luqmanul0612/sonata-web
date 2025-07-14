import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const skipPaths = ["/certificates"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isSkipping = skipPaths.some((path) => pathname.startsWith(path));

  if (isSkipping) {
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}
