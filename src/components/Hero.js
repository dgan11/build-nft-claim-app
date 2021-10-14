function Hero() {
  return (
    <div className="py-10 px-10 mt-5 shadow-md rounded font-mono bg-blue-400">
      <div className="text-center font-extrabold">
        {/* <h1>(Hero Component)</h1> */}
        <h1 className="text-6xl py-8">No More NFT FOMO</h1>
        <h3 className="text-2xl mt-5">Never miss out on an NFT Claim again</h3>
        <p className="mt-5">Get text alerts so you don't have to discord dive through hundreds of projects</p>
        <button className="bg-red-200 rounded-md px-2 py-1 mt-4 text-xl">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Hero;