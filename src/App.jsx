import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoHeader from "./components/TodoHeader";
import TodoDialog from "./components/TodoDialog";
import TodoItem from "./components/TodoItem";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Learn React components",
      status: "completed",
    },
    {
      id: 2,
      title: "Master JavaScript props",
      status: "active",
    },
    {
      id: 3,
      title: "Build a React app",
      status: "active",
    },
    {
      id: 4,
      title: "Deploy React app",
      status: "completed",
    },
    { id: 5, title: "Write unit tests", status: "active" },
    { id: 6, title: "Refactor code", status: "active" },
    { id: 7, title: "Add new features", status: "active" },
    { id: 8, title: "Optimize performance", status: "completed" },
  ]);

  const dialogInfo = {
    title: "Add New Task",
    placeholder: "Enter task title...",
    buttonText: "Save Task",
  };

  const handleDelete = (taskId) => {
    console.log("Delete task with ID:", taskId);
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const handleComplete = (taskId) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "active" ? "completed" : "active",
            }
          : task
      )
    );
  };

  const total = taskList.length;

  const completed = taskList.filter(
    (task) => task.status === "completed"
  ).length;

  const inProgress = taskList.filter((task) => task.status === "active").length;

  const progress = {
    completed,
    total,
    remaining: inProgress,
    percent: (completed / total) * 100,
  };

  const [search, setSearch] = useState("");
  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none p-8 mb-8">
        <h1 className="text-4xl font-black text-black mb-2 text-center">
          FUTURE TO DO LIST
        </h1>

        <p className="text-lg font-bold text-black text-center mb-6">
          Your mission control dashboard
        </p>

        {/* --- Truyền props xuống Header --- */}
        <TodoHeader
          progress={progress}
          total={total}
          completed={completed}
          inProgress={inProgress}
          search={search}
          setSearch={setSearch}
        />

        {/* --- Truyền props xuống Modal/Dialog --- */}
        <TodoDialog dialogInfo={dialogInfo} />

        <div className="flex gap-3 mt-6">
          <button
            className="
        px-4 w-full py-2 
        border-[3px] border-black
        shadow-[3px_3px_0px_#000]
        bg-gray-200
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
      "
          >
            All
          </button>

          <button
            className="
        px-4 w-full py-2 
        border-[3px] border-black
        shadow-[3px_3px_0px_#000]
        bg-green-300
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
      "
          >
            Active
          </button>

          <button
            className="
        px-4 w-full py-2 
        border-[3px] border-black
        shadow-[3px_3px_0px_#000]
        bg-orange-300
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
      "
          >
            Completed
          </button>
        </div>

        {/* Search */}
        <input
          placeholder="Search tasks..."
          className="
      w-full mt-6 p-3 
      border-[3px] border-black
      shadow-[3px_3px_0px_#000]
      bg-white 
      placeholder-gray-400
      focus:outline-none
    "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* --- Truyền danh sách task xuống TodoItem để map --- */}
      </div>
      <TodoItem
        taskList={filteredTasks}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </>
  );
}

export default App;
