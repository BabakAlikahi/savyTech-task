import { toast } from "sonner";
import { useTodoStore } from "../store/todo-store";
import { useUiStore } from "../store/todo-ui-store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function TodoConfirmDialog() {
  const { deleteDialogOpen, closeDeleteDialog, selectedItem } = useUiStore();
  const { deleteItem } = useTodoStore();

  const handleDelete = () => {
    if (!selectedItem) return;
    deleteItem(selectedItem.id);
    toast.success("Item deleted ✅");
    closeDeleteDialog();
  };
  return (
    <AlertDialog
      open={deleteDialogOpen}
      onOpenChange={closeDeleteDialog}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Task: "{selectedItem?.title}" ?</AlertDialogTitle>
          <AlertDialogDescription>This action is permanent and cannot be undone. Are you sure you want to proceed?</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TodoConfirmDialog;
