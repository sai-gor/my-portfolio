import React from 'react'
import image from '../images/wp.jpg';

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-yellow-600 to-blue-700 relative bg-black h-full w-full bg-cover">
      <img
        src={image}
        alt="countryside farmhouse beside paved road at sunset"
        className="absolute mix-blend-overlay object-cover w-full h-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none  home-name">
          Welcome
        </h1>
      </section>
  </main>
  )
}
