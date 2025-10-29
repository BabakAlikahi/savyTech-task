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
import { useUiStore } from "../store/todo-ui-store";
import { useTodoStore } from "../store/todo-store";
import { toast } from "sonner";

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
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action can’t be undone.</AlertDialogDescription>
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
