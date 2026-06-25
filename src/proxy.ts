import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const publicRoutes = ["/", "/auth/register", "/auth/forgot-password", "/auth/login" , "/property" ,"/agent"];

function isPublicRoute(pathname: string): boolean {
  return publicRoutes.includes(pathname);
}

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session
  await supabase.auth.getUser()

  const { pathname } = request.nextUrl;

  if (isPublicRoute(pathname)) {
    return supabaseResponse;
  }

  const token = request.cookies.get("Token")?.value;
  const role = request.cookies.get("role")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Role-based access control
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/manager") && role !== "manager") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/agent") && role !== "agent") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:png|jpg|jpeg|gif|webp|svg)$).*)",
  ],
};
