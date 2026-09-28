export default function TicketCard({ ticket, onSelect }) {
  const isSelected = ticket.status === 'In Progress';

  return (
    <div 
      onClick={() => onSelect(ticket)}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-gray-800 text-base">{ticket.title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 ${
            isSelected 
              ? 'bg-amber-100 text-amber-700' 
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            <span>●</span> {ticket.status}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-6">{ticket.description}</p>
      </div>

      <div className="flex justify-between items-center text-[11px] text-gray-400 pt-3 border-t border-gray-100">
        <span className="font-medium text-gray-600">👤 {ticket.customer}</span>
        <span>📅 {ticket.createdAt}</span>
      </div>
    </div>
  );
}