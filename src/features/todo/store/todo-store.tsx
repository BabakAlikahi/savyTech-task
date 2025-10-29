import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TodoType } from "../types/todo-types";

type StoreState = {
  items: TodoType[];
  addItem: (item: Omit<TodoType, "id" | "createdAt" | "updatedAt">) => void;
  updateItem: (id: string, data: Partial<TodoType>) => void;
  deleteItem: (id: string) => void;
};

export const useTodoStore = create<StoreState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (data) =>
        set((state) => ({
          items: [
            ...state.items,
            {
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
              ...data,
            },
          ],
        })),
      updateItem: (id, data) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, ...data } : item)),
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    { name: "item-store" },
  ),
);
