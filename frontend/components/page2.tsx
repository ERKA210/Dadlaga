export default function SearchBar() {
  return (
    <div className="flex justify-center mt-4 bg-gray-100">
      
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
        
        {/* Search input */}
        <div className="flex items-center px-3 border-r flex-1">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>

          <input
            type="text"
            placeholder="Ажлын байр хайх..."
            className="ml-2 w-full text-sm outline-none"
          />
        </div>

        {/* Category */}
        <select className="px-4 text-sm outline-none border-r">
          <option>Ангилал</option>
          <option>IT</option>
          <option>Маркетинг</option>
        </select>

        {/* Location */}
        <select className="px-4 text-sm outline-none border-r">
          <option>Байршил</option>
          <option>Улаанбаатар</option>
          <option>Дархан</option>
        </select>

        {/* Button */}
        <button className="bg-blue-600 px-6 text-white font-medium hover:bg-blue-700">
          Хайх
        </button>
      </div>

    </div>
  );
}
