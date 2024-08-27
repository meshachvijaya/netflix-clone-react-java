export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Netflix</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-red-600">Home</a></li>
            <li><a href="/movies" className="hover:text-red-600">Movies</a></li>
            <li><a href="/profile" className="hover:text-red-600">Profile</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  