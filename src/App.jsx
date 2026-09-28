import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import initialTickets from './data/tickets.json';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  //Card a click korle Inprogress a add hve 
  const handleSelectTicket = (ticket) => {
    if (inProgressTasks.some((t) => t.id === ticket.id)) {
      toast.warning("This ticket is already in progress!");
      return;
    }
    setInProgressTasks([...inProgressTasks, ticket]);
    toast.info(`Task "${ticket.title}" added to Task Status!`);
  };

  // Complete btn a click korle Resolved a cole jave
  const handleCompleteTask = (task) => {
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
    setTickets(tickets.filter((t) => t.id !== task.id));
    setResolvedTasks([...resolvedTasks, task]);
    toast.success(`Task "${task.title}" marked as resolved!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Banner 
            inProgressCount={inProgressTasks.length} 
            resolvedCount={resolvedTasks.length} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
            {/* Left 2 Columns: Customer Tickets List */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map((ticket) => (
                  <TicketCard 
                    key={ticket.id} 
                    ticket={ticket} 
                    onSelect={handleSelectTicket} 
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Task Status & Resolved Sections */}
            <div>
              <TaskStatus 
                taskList={inProgressTasks} 
                resolvedList={resolvedTasks} 
                onComplete={handleCompleteTask} 
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}