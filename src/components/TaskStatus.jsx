export default function TaskStatus({ taskList, resolvedList, onComplete }) {
  return (
    <div className="space-y-6">
      {/* Task Status */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-sm font-bold text-gray-900 mb-3">Task Status</h2>
        {taskList.length === 0 ? (
          <p className="text-xs text-gray-400 italic">Select a ticket to add it here.</p>
        ) : (
          <div className="space-y-3">
            {taskList.map((task) => (
              <div key={task.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
                <p className="text-xs font-semibold text-gray-800">{task.title}</p>
                <button
                  onClick={() => onComplete(task)}
                  className="w-full bg-[#00C853] hover:bg-emerald-600 text-white text-xs py-2 rounded-md font-bold transition shadow-xs"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Task */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-sm font-bold text-gray-900 mb-3">Resolved Task</h2>
        {resolvedList.length === 0 ? (
          <p className="text-xs text-gray-400 italic">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-2">
            {resolvedList.map((item) => (
              <div key={item.id} className="p-3 bg-indigo-50/60 text-indigo-900 border border-indigo-100 rounded-lg text-xs font-medium">
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}