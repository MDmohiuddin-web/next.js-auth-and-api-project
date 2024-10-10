"use client";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";

const SignUpPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      image: e.target.image.value,
      email: e.target.email.value,
      type: e.target.type.value,
      password: e.target.password.value,
    };
    const response = await fetch(
      "http://localhost:3000/api/auth/signup/new-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );
    console.log(response);
  };

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

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <h2 className="text-center text-lg font-medium">
            Create Your Account
          </h2>

          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <input
                autoComplete="name"
                type="text"
                name="name"
                id="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="image" className="sr-only">
              Image
            </label>
            <div className="relative">
              <input
                autoComplete="off"
                type="url"
                name="image"
                id="image"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Image URL"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="option" className="sr-only">
              type
            </label>
            <div className="relative">
              <select
                name="type"
                id="type"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm capitalize"
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
                <option value="moderator">moderator</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                autoComplete="email"
                id="email"
                name="email"
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
                name="password"
                autoComplete="current-password"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Create Password"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-indigo-600 hover:underline"
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
