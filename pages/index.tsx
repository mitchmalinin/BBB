import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="h-screen grid gap-6 justify-items-center content-center bg-black  text-white">
      <img className=" w-10/12 md: max-w-sm" src="../static/logo-bg.svg" />
      <h1 className="text-4xl md:text-5xl font-bold">Big Boss Burgers</h1>
      <h2 className="text-3xl md:text-4xl font-light">Coming soon...</h2>
      <a
        className="text-blue-400 hover:text-white"
        href="https://twitter.com/BossBurgerNFT"
      >
        {" "}
        <i className="fab fa-twitter fa-2x transition-all cursor-pointer"></i>
      </a>
    </div>
  )
}

export default Home
