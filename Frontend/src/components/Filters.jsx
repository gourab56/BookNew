import { FaSearch, FaStar } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Filters({
  search,
  setSearch,
  rating,
  setRating,
  inStock,
  setInStock,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onPriceFilter,
}) {
  return (
    <aside className=" bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-200 space-y-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

      {/* 🔍 Search */}
      <div>
        <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
          <FaSearch /> Search
        </label>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* ⭐ Rating */}
      <div>
        <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
          <FaStar className="text-yellow-400" /> Rating
        </label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All Ratings</option>
          <option value="1">⭐ 1+</option>
          <option value="2">⭐ 2+</option>
          <option value="3">⭐ 3+</option>
          <option value="4">⭐ 4+</option>
          <option value="5">⭐ 5</option>
        </select>
      </div>

      {/* 📦 Stock */}
      <div>
        <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
          <MdInventory /> Availability
        </label>
        <select
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </div>

      {/* 💰 Price Range */}
      <div>
        <label className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-2">
          <FaMoneyBillWave className="text-green-600" /> Price Range
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          onClick={onPriceFilter}
          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
