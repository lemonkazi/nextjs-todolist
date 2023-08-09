import { PrismaClient } from "@prisma/client";
import { updateComplete } from "./AddTodo";
import TodoCard from "./TodoCard";
import AddButton from "./AddTodoButton";

const prisma = new PrismaClient();

function handleComplete(id: number, comp: boolean) {
  updateComplete(id, comp);
}

export default async function ToDos() {
  const todos = await prisma.todo.findMany();
  const newTodos = todos.map((todo, index) => ({
    index: index,
    id: todo.id,
    title: todo.title,
    body: todo.body,
    due: todo.due.toDateString(),
    comp: todo.comp,
  }));

  return (
    <div>
      <section className="py-20 bg-white tails-selected-element">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            ToDo List
          </h2>
          <p className="mt-2 text-lg text-center text-gray-600">
            Current items in your ToDo list:
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            {newTodos.map((todo) => (
              <TodoCard
                index={todo.index}
                id={todo.id}
                title={todo.title ? todo.title : ""}
                body={todo.body}
                due={todo.due}
                comp={todo.comp}
              />
            ))}
          </div>
        </div>
        <AddButton />
      </section>
    </div>
  );
}