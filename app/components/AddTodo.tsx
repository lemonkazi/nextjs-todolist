'use server'

import { PrismaClient } from '@prisma/client';
import {ToDo} from '../types/ToDo';
import { GetResult } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

const randomTodos: {
    title: string;
    body: string;
    due: string;
    comp: boolean;
  }[] = [
    {
      title: "Read a book",
      body: "Choose a good novel",
      due: "2023-07-04",
      comp: false,
    },
    {
      title: "Call a friend",
      body: "Catch up on recent events",
      due: "2023-05-02",
      comp: false,
    },
    {
      title: "Fix the car",
      body: "Check the engine",
      due: "2023-07-13",
      comp: false,
    },
    {
      title: "Plan a vacation",
      body: "Choose a destination",
      due: "2023-05-15",
      comp: false,
    },
    {
      title: "Attend a meeting",
      body: "Prepare presentation",
      due: "2023-05-05",
      comp: false,
    },
    {
      title: "Complete assignments",
      body: "Math and English",
      due: "2023-05-01",
      comp: false,
    },
    {
      title: "Write an article",
      body: "Tech trends",
      due: "2023-07-20",
      comp: false,
    },
  ];

  export async function updateComplete(id: string, comp: boolean) {
    "use server"
    const updateUser = await prisma.todo.update({
      where: {
        id
      },
      data: {
        comp: !comp,
      },
    })
    }

 export async function fetchToDos(): Promise<ToDo[]> {
    const allTodos = await prisma.todo.findMany();
    const resolvedTodos: ToDo[] = allTodos.map((todo) => ({
      id: todo.id,
      title: todo.title ?? '',
      body: todo.body,
      //due: todo.due.toDateString(),
      due: todo.due,
      comp: todo.comp,
    }));
    return (resolvedTodos);
  }

  export async function resetData() {
    await prisma.todo.deleteMany({});
  }
 

 export async function seedTodos() {
  for (const todo of randomTodos) {
    await createTodo(todo.title, todo.body, todo.due, todo.comp);
  }
  }
  

export async function createTodo(title:string, body:string, due:string, comp:boolean) {
    return await prisma.todo.create({
      data: {
        title,
        body,
        due,
        comp
      },
    });
  }