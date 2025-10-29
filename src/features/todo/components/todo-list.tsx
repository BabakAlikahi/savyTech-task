import { Button } from "@/components/ui/button";
import { useTodoStore } from "../store/todo-store";
import { useUiStore } from "../store/todo-ui-store";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import TodoItem from "./todo-item";
import TodoForm from "./todo-form";
import EmptyTodo from "./empty-todo";
import TodoDialog from "./todo-dialog";
import TodoConfirmDialog from "./todo-confirm-dialog";

function TodoList() {
  const tableHeader = ["title", "subtitle", "createdAt", "updatedAt", "action"];

  const { items } = useTodoStore();
  const { openCreateForm } = useUiStore();

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button onClick={openCreateForm}>Create Item</Button>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableCaption className="pb-4">Todo List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">#</TableHead>
              {tableHeader.map((item, index) => (
                <TableHead
                  key={index}
                  className="text-center"
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <TodoItem
                  key={index}
                  number={index + 1}
                  item={item}
                />
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="text-center"
                  colSpan={6}
                >
                  <EmptyTodo onAction={openCreateForm} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TodoDialog>
        <TodoForm />
      </TodoDialog>
      <TodoConfirmDialog />
    </>
  );
}

export default TodoList;
