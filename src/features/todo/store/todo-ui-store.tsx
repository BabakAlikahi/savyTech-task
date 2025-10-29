import { create } from "zustand";
import type { TodoType } from "../types/todo-types";

type UiState = {
  itemFormOpen: boolean;
  deleteDialogOpen: boolean;
  selectedItem: TodoType | null;

  openCreateForm: () => void;
  openEditForm: (item: TodoType) => void;
  closeItemForm: () => void;

  openDeleteDialog: (item: TodoType) => void;
  closeDeleteDialog: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  itemFormOpen: false,
  deleteDialogOpen: false,
  selectedItem: null,

  openCreateForm: () => set({ itemFormOpen: true, selectedItem: null }),
  openEditForm: (item) => set({ itemFormOpen: true, selectedItem: item }),
  closeItemForm: () => set({ itemFormOpen: false, selectedItem: null }),

  openDeleteDialog: (item) => set({ deleteDialogOpen: true, selectedItem: item }),
  closeDeleteDialog: () => set({ deleteDialogOpen: false, selectedItem: null }),
}));
