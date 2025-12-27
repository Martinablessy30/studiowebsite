import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Work from "./sections/Work";
import Featured from "./sections/Featured";
import Contact from "./sections/Contact";
import Studio from "./sections/Studio";

export default function App() {
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Intro />
      <Work />
      <Featured />
      <Contact />
      <Studio />
    </>
  );
}

