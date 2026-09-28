export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-lg md:text-xl font-bold text-gray-900">
        CS — Ticket System
      </h1>
      
      <div className="flex items-center space-x-6 text-xs font-medium text-gray-600">
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-600 transition">Home</a>
          <a href="#" className="hover:text-purple-600 transition">FAQ</a>
          <a href="#" className="hover:text-purple-600 transition">Changelog</a>
          <a href="#" className="hover:text-purple-600 transition">Blog</a>
          <a href="#" className="hover:text-purple-600 transition">Download</a>
          <a href="#" className="hover:text-purple-600 transition">Contact</a>
        </div>
        <button className="bg-[#635BFF] hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}