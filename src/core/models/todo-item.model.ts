export enum TODO_STATUS {
  ACTIVE,
  DONE,
  PENDING
}

export type ToDoItem = {
  name: string;
  id: number;
  status: TODO_STATUS;
}