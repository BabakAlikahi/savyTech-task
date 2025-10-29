import { Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import EmptyTodo from "./empty-todo";

function TodoList() {
  const tableHeader = ["title", "subtitle", "createdAt", "updatedAt", "action"];

  const handleClick = () => {
    console.log("click");
  };

  return (
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
          {true ? (
            <TableRow className="text-center">
              <TableCell className="font-medium">{"num"}</TableCell>
              <TableCell>{"item.title"}</TableCell>
              <TableCell>{"item.subtitle"}</TableCell>
              <TableCell>{"item.createdAt"}</TableCell>
              <TableCell>{"item.updatedAt ?? ----"}</TableCell>
              <TableCell className="flex items-center justify-center gap-2 text-right">
                <Button size={"icon"}>
                  <Pen />
                </Button>
                <Button
                  size={"icon"}
                  variant={"destructive"}
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell
                className="text-center"
                colSpan={6}
              >
                <EmptyTodo onAction={handleClick} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TodoList;
