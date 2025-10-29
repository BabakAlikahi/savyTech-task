import Header from "./features/header/header";
import TodoList from "./features/todo/components/todo-list";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto w-11/12 md:w-3/4">
        <TodoList />
      </div>
    </>
  );
}

export default App;
