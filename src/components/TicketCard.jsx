export default function TicketCard({ ticket, onSelect }) {
  const isInProgress = ticket.status === 'In Progress';

  return (
    <div 
      onClick={() => onSelect(ticket)}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-bold text-gray-800 text-sm">{ticket.title}</h3>
          <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1 shrink-0 ${
            isInProgress 
              ? 'bg-amber-100 text-amber-800' 
              : 'bg-emerald-100 text-emerald-800'
          }`}>
            <span className="text-[8px]">●</span> {ticket.status}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">{ticket.description}</p>
      </div>

      <div className="flex justify-between items-center text-[11px] text-gray-400 pt-3 border-t border-gray-100">
        <span className="font-medium text-gray-600">👤 {ticket.customer}</span>
        <span>📅 {ticket.createdAt}</span>
      </div>
    </div>
  );
}