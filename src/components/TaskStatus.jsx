export default function TaskStatus({ taskList, resolvedList, onComplete }) {
  return (
    <div className="space-y-6">
      {/* Task Status */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">Task Status</h2>
        {taskList.length === 0 ? (
          <p className="text-xs text-gray-400 italic">Select a ticket to add it to progress.</p>
        ) : (
          <div className="space-y-3">
            {taskList.map((task) => (
              <div key={task.id} className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                <p className="text-xs font-semibold text-gray-800">{task.title}</p>
                <button
                  onClick={() => onComplete(task)}
                  className="w-full bg-[#00C853] hover:bg-emerald-600 text-white text-xs py-2 rounded-lg font-bold transition shadow-sm"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Task */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">Resolved Task</h2>
        {resolvedList.length === 0 ? (
          <p className="text-xs text-gray-400 italic">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-2">
            {resolvedList.map((item) => (
              <div key={item.id} className="p-3 bg-purple-50 text-purple-900 border border-purple-100 rounded-xl text-xs font-semibold">
                ✓ {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}