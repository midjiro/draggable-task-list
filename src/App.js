import CreateTaskForm from "components/CreateTaskForm";
import Footer from "components/Footer";
import Header from "components/Header";
import TaskList from "components/TaskList";
import { useState } from "react";

function App() {
  const tasks = [
    { id: 1, title: "Title #1", status: "Completed" },
    { id: 2, title: "Title #2", status: "To do" },
    { id: 3, title: "Title #3", status: "To do" },
  ];

  const [filterByStatus, setFilterByStatus] = useState("All");

  const updateFilterByStatus = (newOption) => {
    setFilterByStatus(newOption);
  };

  return (
    <div className="task-manager">
      <Header filterOnChange={updateFilterByStatus} />
      <main className="task-manager__body">
        <CreateTaskForm />
        <TaskList tasks={tasks} filterByStatus={filterByStatus} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
