import { Pen, Trash } from "lucide-react";

import { formatDate } from "@/lib/hooks/hooks";
import { Button } from "@/components/ui/button";
import type { TodoType } from "../types/todo-types";
import { useUiStore } from "../store/todo-ui-store";
import { TableCell, TableRow } from "@/components/ui/table";

type Props = {
  number: number;
  item: TodoType;
};

function TodoItem({ number, item }: Props) {
  const { openDeleteDialog, openEditForm } = useUiStore();

  return (
    <TableRow className="text-center">
      <TableCell className="font-medium">{number}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.subtitle}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
      <TableCell>{item.updatedAt ? formatDate(item.updatedAt) : "----"}</TableCell>
      <TableCell className="flex items-center justify-center gap-2 text-right">
        <Button
          onClick={() => {
            openEditForm(item);
          }}
          size={"icon"}
        >
          <Pen />
        </Button>
        <Button
          size={"icon"}
          variant={"destructive"}
          onClick={() => {
            openDeleteDialog(item);
          }}
        >
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TodoItem;
