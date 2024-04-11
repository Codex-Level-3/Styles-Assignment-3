import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import PlanetCards from "./components/PlanetCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <h2 id="featured" className="text-white p-2 mb-3 text-3xl">
        Featured Planets:
      </h2>
      <div className="flex flex-wrap justify-center content-center gap-8 p-2 mb-3">
        <PlanetCards
          title="Neptune"
          description="The farthest planet in our solar system."
          src="/neptune.jpg"
          alt="neptune"
        />
        <PlanetCards
          title="Mercury"
          description="The swiftest planet."
          src="/mercury.jpg"
          alt="mercury"
        />
        <PlanetCards
          title="Earth"
          description="Our homeworld."
          src="/earth.jpg"
          alt="earth"
        />
        <PlanetCards
          title="Pluto"
          description="A small world with a big heart."
          src="/pluto.jpg"
          alt="pluto"
        />
        <PlanetCards
          title="Uranus"
          description="The original ice giant."
          src="/uranus.jpg"
          alt="uranus"
        />
        <PlanetCards
          title="Mars"
          description="The Red Planet"
          src="/mars.jpg"
          alt="mars"
        />
      </div>
      <Footer />
    </main>
  );
}
