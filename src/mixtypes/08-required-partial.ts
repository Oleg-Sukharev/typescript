interface Todo {
  id: string;
  title: string;
  description?: string;
}

type RequiredTodo = Required<Todo>;

type ReadOnlyTodo = Readonly<Todo>;
type PartialTodo = Partial<ReadOnlyTodo>;

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

