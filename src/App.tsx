import React, { useState } from 'react';
import { Film, Clock, Calendar, MapPin } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  language: string;
  showTimes: string[];
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    rating: 4.5,
    language: "English",
    showTimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"]
  },
  {
    id: 2,
    title: "The Batman",
    image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg",
    rating: 4.3,
    language: "English",
    showTimes: ["11:15 AM", "2:45 PM", "6:15 PM", "9:30 PM"]
  },
  {
    id: 3,
    title: "Kung Fu Panda 4",
    image: "https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg",
    rating: 4.2,
    language: "English",
    showTimes: ["9:30 AM", "12:45 PM", "4:00 PM", "7:15 PM"]
  }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8" />
            <h1 className="text-2xl font-bold">BookMyShow</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-6">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-lg">Mumbai</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <span>⭐ {movie.rating}/5</span>
                  <span>•</span>
                  <span>{movie.language}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.showTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedMovie(movie);
                        setSelectedTime(time);
                      }}
                      className={`px-3 py-1 rounded ${
                        selectedMovie?.id === movie.id && selectedTime === time
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        {selectedMovie && selectedTime && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{selectedMovie.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Today</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{selectedTime}</span>
                </div>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                Book Tickets
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;