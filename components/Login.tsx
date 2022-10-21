import { useMetamask } from "@thirdweb-dev/react";
import React from "react";

function Login() {

  const connectMetamask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 mb-10"
          src="https://zupimages.net/up/22/42/ydju.png"
          alt=""
        />

        <h1 className="text-6xl text-white font-bold">Hello My Friend</h1>
        <h2 className="text-white mt-5">Get Started By logging in with your MetaMask</h2>
        <button onClick={connectMetamask} className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold">Login with MetaMask</button>
      </div>
    </div>
  );
}

export default Login;
