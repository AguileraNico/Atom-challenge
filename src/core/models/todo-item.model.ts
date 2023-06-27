export enum TODO_STATUS {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

export type ToDoItem = {
  name: string;
  id: number;
  status: TODO_STATUS;
}