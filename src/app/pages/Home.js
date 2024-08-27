import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-white mb-4">Trending Movies</h2>
        <MovieList />
      </div>
      <Footer />
    </div>
  );
}
