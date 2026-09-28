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

  // কাস্টমার টিকেট কার্ডে ক্লিক করলে তা In Progress-এ যাবে
  const handleSelectTicket = (ticket) => {
    // ইতোমধ্যে In Progress লিস্টে আছে কিনা চেক
    if (inProgressTasks.some((t) => t.id === ticket.id)) {
      toast.warning("This ticket is already in progress!");
      return;
    }

    // ইন-প্রোগ্রেসে যুক্ত করা
    setInProgressTasks([...inProgressTasks, ticket]);

    // মূল টিকেট লিস্টে ওই টিকেটের স্ট্যাটাস 'In Progress' এ আপডেট করা
    setTickets(
      tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: 'In Progress' } : t
      )
    );

    toast.info(`Task "${ticket.title}" added to Task Status!`);
  };

  // Complete বাটনে ক্লিক করলে তা Resolved হবে এবং মূল টিকেট লিস্ট থেকে রিমুভ হবে
  const handleCompleteTask = (task) => {
    // ১. Task Status (In Progress) থেকে রিমুভ
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));

    // ২. Customer Tickets লিস্ট থেকে সম্পূর্ণ রিমুভ (Challenge Requirement)
    setTickets(tickets.filter((t) => t.id !== task.id));

    // ৩. Resolved List-এ যুক্ত করা
    setResolvedTasks([...resolvedTasks, task]);

    toast.success(`Task "${task.title}" marked as resolved!`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-between font-sans">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ব্যানার সেকশন */}
          <Banner 
            inProgressCount={inProgressTasks.length} 
            resolvedCount={resolvedTasks.length} 
          />

          {/* প্রধান সেকশন */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8 items-start">
            {/* বাম পাশে ২-কলামের কাস্টমার টিকেট লিস্ট */}
            <div className="lg:col-span-2">
              <h2 className="text-base font-bold text-gray-900 mb-4">Customer Tickets</h2>
              {tickets.length === 0 ? (
                <p className="text-sm text-gray-400 italic">No tickets available.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tickets.map((ticket) => (
                    <TicketCard 
                      key={ticket.id} 
                      ticket={ticket} 
                      onSelect={handleSelectTicket} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ডান পাশে টাস্ক স্ট্যাটাস এবং রিজলভড সেকশন */}
            <div className="lg:col-span-1">
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