"use client";
import { Button } from "@/components/ui/button";
import { ClientNavbarMenu } from "@/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ClientHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-slate-900">Meridian</span>
          <span className="text-[10px] tracking-[4px] text-slate-500">
            REAL ESTATE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {ClientNavbarMenu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden md:flex px-4 py-2 text-sm border rounded-md hover:bg-muted"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="hidden md:flex px-4 py-2 text-sm bg-primary text-white border rounded-md hover:bg-white hover:text-black"
          >
            Signup
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-bold">Meridian</h2>
                  <p className="text-xs tracking-[3px] text-muted-foreground">
                    REAL ESTATE
                  </p>
                </div>

                <nav className="flex flex-col gap-4">
                  {ClientNavbarMenu.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-base font-medium text-slate-700 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="border-t pt-6 flex flex-col gap-3">
                  <Link
                    href="/auth/login"
                    className=" px-4 py-2 text-sm border rounded-md hover:bg-muted"
                  >
                    Login
                  </Link>

                  <Link
                    href="/auth/register"
                    className="px-4 py-2 text-sm bg-primary text-white border rounded-md hover:bg-white hover:text-black"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
