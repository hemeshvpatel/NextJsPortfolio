import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Hemesh Patel's Portfolio</title>
        <meta name="description" content="Created by Hemesh using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="hero" className="snap-start">
        <Header />
      </section>

      <Hero />

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}

//Building the hero section 43 min https://www.youtube.com/watch?v=urgi2iz9P6U&t=2919s
