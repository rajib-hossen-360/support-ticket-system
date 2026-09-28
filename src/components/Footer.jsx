export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 mt-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 text-xs">
        <div className="md:col-span-1">
          <h2 className="text-white font-bold text-sm mb-3">CS — Ticket System</h2>
          <p className="text-gray-500 leading-relaxed">
            Customer support ticketing system built with React & Tailwind CSS.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Team</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-white transition">Customer Service</a></li>
            <li><a href="#" className="hover:text-white transition">Ticket Tracking</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-gray-500">
            <li>🌐 @CS — Ticket System</li>
            <li>🌐 @CS — Ticket System</li>
            <li>🌐 @CS — Ticket System</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[11px] text-gray-600 pt-8 border-t border-gray-900">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}