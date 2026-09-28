
export default function TaskStatus({ taskList, resolvedList, onComplete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-6">
      {/* Task Status (In Progress) Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">Task Status</h2>
        {taskList.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No active tasks in progress.</p>
        ) : (
          <div className="space-y-3">
            {taskList.map((task) => (
              <div key={task.id} className="p-3 border rounded-lg bg-gray-50 flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-800">{task.title}</p>
                <button
                  onClick={() => onComplete(task)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 rounded font-medium transition"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Task Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">Resolved Task</h2>
        {resolvedList.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No resolved tasks yet.</p>
        ) : (
          <div className="space-y-2">
            {resolvedList.map((item) => (
              <div key={item.id} className="p-3 bg-purple-50 text-purple-900 border border-purple-100 rounded-lg text-sm font-medium">
                ✓ {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}