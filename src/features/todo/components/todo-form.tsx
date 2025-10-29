import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { todoSchema, type TodoFormValues } from "../schema/todo-schema";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import CustomInput from "@/features/form/custom-input";
import { useUiStore } from "../store/todo-ui-store";
import { useTodoStore } from "../store/todo-store";
import { useEffect } from "react";
import { toast } from "sonner";

function TodoForm() {
  const { itemFormOpen, closeItemForm, selectedItem } = useUiStore();
  const { addItem, updateItem } = useTodoStore();
  const { control, handleSubmit, reset } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: selectedItem ?? { title: "", subtitle: "" },
  });

  useEffect(() => {
    reset(selectedItem ?? { title: "", subtitle: "" });
  }, [selectedItem]);

  const onSubmit = (data: TodoFormValues) => {
    if (selectedItem) {
      updateItem(selectedItem.id, data);
      toast.success("Item updated ✅");
    } else {
      addItem(data);
      toast.success("Item created 🎉");
    }
    closeItemForm();
  };

  return (
    <Dialog
      open={itemFormOpen}
      onOpenChange={closeItemForm}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedItem  ? "Edit Item" : "Create Item"}</DialogTitle>
          <DialogDescription>{selectedItem  ? "lorem edit" : "lorem create"}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <CustomInput
              control={control}
              name="title"
              label="title"
            />
            <CustomInput
              control={control}
              name="subtitle"
              label="subtitle"
            />

            <Button
              type="submit"
              className="w-full"
            >
              {selectedItem  ? "Update" : "Create"}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TodoForm;
