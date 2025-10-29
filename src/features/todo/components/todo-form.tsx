import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { todoSchema, type TodoFormValues } from "../schema/todo-schema";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import CustomInput from "@/features/form/custom-input";

function TodoForm() {
  const { control, handleSubmit } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: { title: "", subtitle: "" },
  });

  const onSubmit = (data: TodoFormValues) => {
    console.log(data);
  };

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{true ? "Edit Item" : "Create Item"}</DialogTitle>
          <DialogDescription>{true ? "lorem edit" : "lorem create"}</DialogDescription>
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
              {true ? "Update" : "Create"}
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TodoForm;
