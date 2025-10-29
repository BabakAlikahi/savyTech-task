import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { useTodoStore } from "../store/todo-store";
import { useUiStore } from "../store/todo-ui-store";
import { todoSchema, type TodoFormValues } from "../schema/todo-schema";

import CustomInput from "@/features/form/custom-input";

function TodoForm() {
  const { closeItemForm, selectedItem } = useUiStore();
  const { addItem, updateItem } = useTodoStore();
  const { control, handleSubmit } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: selectedItem ?? { title: "", subtitle: "" },
  });

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
          {selectedItem ? "Update" : "Create"}
        </Button>
      </FieldGroup>
    </form>
  );
}

export default TodoForm;
