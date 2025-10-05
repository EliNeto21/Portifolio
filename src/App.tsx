import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;