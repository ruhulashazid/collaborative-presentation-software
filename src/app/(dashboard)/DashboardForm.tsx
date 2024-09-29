"use client";

import React from "react";
import { useRouter } from "next/navigation";

function DashboardForm() {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null!);

  const handleLogin = () => {
    const userName = inputRef.current.value;

    if (!userName) {
      alert("Enter your name");
      return;
    }

    router.replace(`/home?name=${userName}`);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 mx-auto">

        <h1 className="font-semibold mb-5 text-2xl text-center">
        <span>Welcome to,</span>
        <br /> {}
        <span>Collaborative design software</span>
        </h1>
        <div className="mb-4">
         <img
           src="/logo.svg" 
           alt="Project Logo"
           className="mx-auto w-24 h-24" 
          />
        </div>
        <div>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
            className="border-2 border-black p-3 mb-4 border-solid w-full"
          />
        </div>

         <div className="text-center"> {/* Center the button */}
          <button
            onClick={handleLogin}
            className="p-4 bg-black rounded-sm text-white mx-auto"
          >
            Join Presentation
          </button>
      </div>
      </div>
    </div>
  );
}

export default DashboardForm;



