"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "/public/a.jpg";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
// npm i @headlessui/react

import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
// npm i @heroicons/react

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
//   console.log(session);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handler = () => {
    router.push("/api/auth/signin");
    console.log("hello");
  };

  return (
    <div className="bg-gray-100">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Alowishus Delicious</span>
            <Image
              height={200}
              width={80}
              alt="Alowishus Delicious Logo"
              src={logo}
              loading="lazy"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            aria-current="page"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            Find Us
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            Alowishus Catering
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-white bg-black p-2 rounded-full"
          >
            <ShoppingBagIcon width={20} className="hover:cursor-pointer" />
          </Link>

          {session.status==="authenticated" ? (
            <Button
              onClick={handler}
              variant="outline"
              className="capitalize bg-black text-white"
            >
              Login
            </Button>
          ) : (
            <Button
              variant="outline"
              className="capitalize bg-black text-white"
            >
              Logout
            </Button>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Alowishus Delicious</span>
              <Image
                alt="Alowishus Delicious Logo"
                src={logo}
                loading="lazy"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                >
                  Menu
                </Link>
                <Link
                  href="/about"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                >
                  Find Us
                </Link>
                <Link
                  href="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                >
                  Alowishus Catering
                </Link>
              </div>
              <div className=" flex gap-5 items-center border-none">
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-white bg-black p-2 rounded-full"
                >
                  <ShoppingBagIcon
                    width={20}
                    className="hover:cursor-pointer"
                  />
                </Link>

                {session.status==="authenticated" ? (
                  <Button
                    onClick={handler}
                    variant="outline"
                    className="capitalize bg-black text-white"
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="capitalize bg-black text-white"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Header;
