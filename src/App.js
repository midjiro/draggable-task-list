import CreateTaskForm from "components/CreateTaskForm";
import Footer from "components/Footer";
import Header from "components/Header";
import TaskList from "components/TaskList";

function App() {
  const tasks = [
    { id: 1, title: "Title #1", isCompleted: false },
    { id: 2, title: "Title #2", isCompleted: false },
    { id: 3, title: "Title #3", isCompleted: true },
  ];

  return (
    <div className="task-manager">
      <Header />
      <main className="task-manager__body">
        <CreateTaskForm />
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
