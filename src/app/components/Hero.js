export default function Hero() {
    return (
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Watch Something Amazing</h1>
            <p className="text-xl mb-8">Unlimited movies, TV shows, and more.</p>
            <button className="bg-red-600 px-4 py-2 rounded">Watch Now</button>
          </div>
        </div>
      </div>
    );
  }
  