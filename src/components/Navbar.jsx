export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          CS — Ticket System
        </h1>
      </div>
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-600 transition">Home</a>
          <a href="#" className="hover:text-purple-600 transition">FAQ</a>
          <a href="#" className="hover:text-purple-600 transition">Changelog</a>
          <a href="#" className="hover:text-purple-600 transition">Blog</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow transition">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}