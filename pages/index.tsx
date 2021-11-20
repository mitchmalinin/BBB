import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className="h-screen grid gap-8 justify-items-center content-center bg-black  text-white">
      <img src="../static/logo-bg.svg" />
      <h1 className="text-4xl md:text-7xl">Big Boss Burgers</h1>
      <h2 className="text-3xl md:text-5xl">Coming soon...</h2>
      <a
        className="text-blue-400 hover:text-white"
        href="https://twitter.com/BossBurgerNFT"
      >
        {" "}
        <i className="fab fa-twitter fa-3x transition-all cursor-pointer"></i>
      </a>
    </div>
  )
}

export default Home
