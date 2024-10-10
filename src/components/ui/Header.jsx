"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import logo from "/public/OIP.jpg";
import user_Logo from "/public/th.jpg";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
// npm i @headlessui/react

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// npm i @heroicons/react

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  // const pathName = usePathname();
  console.log(session);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handler = () => {
    router.push("/api/auth/signin");
    console.log("hello");
  };

  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "blog",
      path: "/",
    },
    {
      title: "posts",
      path: "/",
    },

    {
      title: "services",
      path: "/",
    },
  ];

  return (
    <div className="">
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="text-sm capitalize font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              aria-current="page"
            >
              {link.title}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
          <div>
            {session?.data?.user?.name}
            {/* <br />
            {session?.data?.user?.type} */}
            <br />
            {session?.data?.user?.email}
          </div>
          <Image
            height={200}
            width={200}
            alt="Alowishus Delicious Logo"
            src={session?.data?.user?.image || user_Logo}
            loading="lazy"
            className="h-8 w-auto rounded-3xl hover:scale-105 hover:shadow-md duration-500 ease-in-out"
          />

          {session.status === "authenticated" ? (
            <Button
              onClick={() => signOut()}
              variant="outline"
              className="capitalize bg-black text-white"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handler}
              variant="outline"
              className="capitalize bg-black text-white"
            >
              Login
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
              <div className=" flex gap-5 items-center border-none pt-10 justify-between">
                <div>
                  {session?.data?.user?.name}
                  <br />
                  {session?.data?.user?.email}
                </div>
                <Image
                  height={200}
                  width={200}
                  alt="Alowishus Delicious Logo"
                  src={session?.data?.user?.image || user_Logo}
                  loading="lazy"
                  className="h-8 w-auto rounded-3xl hover:scale-105 hover:shadow-md duration-500 ease-in-out"
                />

                {session.status === "authenticated" ? (
                  <Button
                    variant="outline"
                    className="capitalize bg-black text-white"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    onClick={handler}
                    variant="outline"
                    className="capitalize bg-black text-white"
                  >
                    Login
                  </Button>
                )}
              </div>
              <div className="space-y-2 py-6 border-none  flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    className="text-sm capitalize font-semibold leading-6 text-gray-900 hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Header;
