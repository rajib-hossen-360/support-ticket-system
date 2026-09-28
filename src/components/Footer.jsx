export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 mt-16 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        <div>
          <h2 className="text-white font-bold text-lg mb-3">CS — Ticket System</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            Providing full support tracking and customer resolution management.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Customer Portal</a></li>
            <li><a href="#" className="hover:underline">Ticket Tracking</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-800">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}