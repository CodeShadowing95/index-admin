"use client";

import { useState, useEffect } from "react"
import { signIn, useSession, getProviders } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Dashboard } from "@/components"
import { LoginButton } from "@/components/auth/login-button"

const Home = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    // It will allow us to log in with Google and next-auth
    (async () => {
      const response: any = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    // <div className="flex-1">
    //     <Dashboard />
    // </div>
    <main className="flex w-[100dvw] h-[100dvh] flex-col items-center justify-center bg-red-200">
      {/* Banner */}
      <div className="fixed inset-0 z-10">
        <Image src="/assets/banner_login.jpg" alt="banner" width={2000} height={2000} className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-70 z-20 p-4">
        <div className="w-full max-w-[500px] h-full max-h-[calc(100vh-80px)] rounded-xl p-8 relative overflow-hidden">
          {/* Bg image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/assets/waves.png" alt="banner" width={2000} height={2000} className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div className="flex flex-col h-full relative">
            {/* Logo and titles */}
            <div className="flex flex-col justify-center items-center gap-4">
              <Image src="/assets/logo-index-ok.png" alt="logo" width={200} height={200} />
              <h1 className="text-xl font-bold text-white mt-2 text-center">Portail d{`'`}administration</h1>
            </div>
            {/* Inputs */}
            <div className="w-full flex flex-col gap-4 mt-10">
              <input type="text" name="email" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Email" />
              <input type="password" name="password" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Mot de passe" />
              {/* <input type="password" name="confirm-password" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Confirmer le mot de passe" /> */}
            </div>
            {/* Login Button */}
            <LoginButton>
              <button type="submit" className="text-zinc-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Se connecter</button>
            </LoginButton>
            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-10 relative">
              <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xs text-white bg-zinc-900 px-3">Ou</p>
            </div>
            {/* Social button */}
            {providers && Object.values(providers).map((provider: any) => (
              provider.id === "google" &&
              <div key={provider.name} className="flex justify-center">
                <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 me-2" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                  Continuer avec Google
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home