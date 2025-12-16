import Header from "./components/Header";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certs from "./sections/Certs";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main className="space-y-6 pb-16">
        <Hero />
        <Highlights />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <footer className="section-shell py-8 text-sm text-sand/60">
        <div className="glass rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
          <p>Built with React & TailwindCSS — Carlos Alvarado.</p>
          <p className="text-sand/50">Last updated {new Date().getFullYear()}.</p>
        </div>
      </footer>
    </div>
  );
}
