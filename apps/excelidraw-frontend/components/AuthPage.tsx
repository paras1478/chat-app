"use client";

import { useState } from "react";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    if (isSignin) {
      console.log("➡️ Sign in with:", { email, password });
      // call your login API here
    } else {
      console.log("➡️ Sign up with:", { email, password });
      // call your signup API here
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 m-2 bg-white rounded-lg shadow-lg text-black w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h2>

        <div className="p-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="p-2">
          <button
            className="bg-red-500 hover:bg-red-600 w-full py-2 rounded text-white"
            onClick={handleSubmit}
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
