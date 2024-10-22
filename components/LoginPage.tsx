"use client";

import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
// Import image from next image
import Image from "next/image";
import matcha from "../assets/file.png";

export default function LoginPage() {
  // On Submit function

  return (
    // Media queries for responsive design
    <div
      className="min-h-screen flex flex-col items-center justify-center 
        bg-gradient-to-b from-[#44624a] to-[#c0cfb2] p-4"
    >
      {/* making the login UI */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-xl ">
        {/* Matcha Logo */}
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={matcha}
              alt="Matcha logo"
              width={100}
              height={100}
              className="hover:motion-safe:animate-spin cursor-pointer" 
            />
          </div>
        </div>


        {/* Buttons for socials*/}
        <div className=" flex justify-around mb-6">

          <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
            {/* Facebook login button with icon */}
            <AiFillFacebook className="mr-2" /> Facebook
          </button>
          <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
            {/* Facebook login button with icon */}
            <AiFillGoogleCircle className="mr-2" /> Google
          </button>
          
        </div>

        {/* Input username and password */}
        <form className="space-y-4">
          <div>
          <input
            type="text"
            placeholder="Username"
            className="mt-1 block w-full px-3 py-2 border-b-2 border-gray-300 rounded-xl mb-2 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          </div>

          <div>
          <input
            type="text"
            placeholder="Password"
            className="mt-1 block w-full px-3 py-2 border-b-2 border-gray-300 rounded-xl mb-2 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          </div>
          
            {/* Sign in button *//* Button for sign in */}
          <div className="flex items-center justify-center">
            <div className="space-x-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
            >
              Sign In
            </button>
            
            </div>
            
          </div>  
          
        </form>
      </div>
    </div>
  );
}
