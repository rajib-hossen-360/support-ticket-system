export default function TicketCard({ ticket, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(ticket)}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-gray-800 text-base">{ticket.title}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            ticket.status === 'In Progress' 
              ? 'bg-amber-100 text-amber-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            ● {ticket.status}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{ticket.description}</p>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100">
        <span className="font-medium text-gray-700">👤 {ticket.customer}</span>
        <span>📅 {ticket.createdAt}</span>
      </div>
    </div>
  );
}