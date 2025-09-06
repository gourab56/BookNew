// Hero.jsx
export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* Heading */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            A Universe of{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Stories & Knowledge
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            From timeless classics to modern masterpieces, explore a carefully curated collection of books that spark imagination, fuel curiosity, and inspire growth.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-purple-600">1000+</h2>
            <p className="text-gray-600 text-sm">Books Available</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-teal-600">4.2 ⭐</h2>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-purple-600">750+</h2>
            <p className="text-gray-600 text-sm">Copies In Stock</p>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="relative max-w-4xl w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
              alt="Library shelves"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
