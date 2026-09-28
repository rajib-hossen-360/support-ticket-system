export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-8 px-8 md:px-16 mt-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 mb-12 text-xs">
        {/* Brand Info Column */}
        <div className="md:w-1/3">
          <h2 className="text-white font-bold text-base mb-3">CS — Ticket System</h2>
          <p className="text-gray-500 leading-relaxed pr-6">
            A real-time ticket tracking customer support system built to organize and resolve technical queries efficiently.
          </p>
        </div>

        {/* Dynamic Nav Columns */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6">
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
              <li><a href="#" className="hover:text-white transition">Customer Portal</a></li>
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
      </div>

      <div className="text-center text-[11px] text-gray-600 pt-8 border-t border-gray-900">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}