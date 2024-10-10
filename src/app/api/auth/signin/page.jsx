import React from "react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome to Our Platform
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Join our community and experience the benefits of our innovative
          solutions.
        </p>

        <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <h2 className="text-center text-lg font-medium">
            sign in Your Account
          </h2>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Create Password"
                required
                autocomplete="current-password"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
          >
            Sign in
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-indigo-600 hover:underline"
              href="/api/auth/signup"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
