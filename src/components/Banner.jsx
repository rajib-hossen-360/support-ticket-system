export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {/* In Progress Count Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-col items-center justify-center shadow-lg">
        <p className="text-lg font-medium opacity-90">In Progress</p>
        <p className="text-5xl font-extrabold mt-2">{inProgressCount}</p>
      </div>

      {/* Resolved Count Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex flex-col items-center justify-center shadow-lg">
        <p className="text-lg font-medium opacity-90">Resolved</p>
        <p className="text-5xl font-extrabold mt-2">{resolvedCount}</p>
      </div>
    </div>
  );
}