export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {/* In Progress Box */}
      <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-[#635BFF] to-[#8075FF] text-white flex flex-col items-center justify-center shadow-md">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        <p className="text-sm font-medium opacity-90 uppercase tracking-wider mb-2">In Progress</p>
        <p className="text-6xl font-extrabold">{inProgressCount}</p>
      </div>

      {/* Resolved Box */}
      <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-[#00C853] to-[#1DE9B6] text-white flex flex-col items-center justify-center shadow-md">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        <p className="text-sm font-medium opacity-90 uppercase tracking-wider mb-2">Resolved</p>
        <p className="text-6xl font-extrabold">{resolvedCount}</p>
      </div>
    </div>
  );
}