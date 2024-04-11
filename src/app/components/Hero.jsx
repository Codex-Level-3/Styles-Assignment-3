"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" style={{ width: "100vw", height: "350px" }}>
      <div className="bg-[url('/solar.jpg')] h-full bg-cover justify-center content-center">
        <div className="backdrop-blur-sm p-4 flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold text-center">Planets</h1>
          <p className="text-white text-2xl mb-2">
            Let's explore our solar system! Discover planet facts!
          </p>
          <button className="text-white text-xl bg-blue-500 hover:bg-cyan-600 p-2 rounded font-semibold">
            <Link href="#featured">Explore!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
