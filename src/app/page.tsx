import VideoBackground from './components/VideoBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import DiscordCTA from './components/DiscordCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <FAQ />
        <DiscordCTA />
        <Footer />
      </div>
    </main>
  );
}
