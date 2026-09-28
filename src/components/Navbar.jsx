export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left side Logo */}
      <div className="flex items-center">
        <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
          CS — Ticket System
        </h1>
      </div>

      {/* Right side Menu Links & New Ticket Button */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-5 text-xs font-semibold text-gray-600">
          <a href="#" className="hover:text-purple-600 transition">Home</a>
          <a href="#" className="hover:text-purple-600 transition">FAQ</a>
          <a href="#" className="hover:text-purple-600 transition">Changelog</a>
          <a href="#" className="hover:text-purple-600 transition">Blog</a>
          <a href="#" className="hover:text-purple-600 transition">Download</a>
          <a href="#" className="hover:text-purple-600 transition">Contact</a>
        </div>
        <button className="bg-[#635BFF] hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}