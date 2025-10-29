import type { ReactNode } from "react";
import { useUiStore } from "../store/todo-ui-store";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Props = {
  children: ReactNode;
};
function TodoDialog({ children }: Props) {
  const { itemFormOpen, closeItemForm, selectedItem } = useUiStore();
  return (
    <Dialog
      open={itemFormOpen}
      onOpenChange={closeItemForm}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedItem ? "Edit Item" : "Create Item"}</DialogTitle>
          <DialogDescription>{selectedItem ? "lorem edit" : "lorem create"}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default TodoDialog;
