import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

type Props = {
  onAction: () => void;
};

function EmptyTodo({ onAction }: Props) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ClipboardList />
        </EmptyMedia>
        <EmptyTitle>No Items Yet</EmptyTitle>
        <EmptyDescription>You havent created any items yet. Get started by creating your first item.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={onAction}>Create Item</Button>
      </EmptyContent>
    </Empty>
  );
}

export default EmptyTodo;
