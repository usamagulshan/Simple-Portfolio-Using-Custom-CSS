"use client";

import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
