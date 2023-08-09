import Image from 'next/image'
import { TodoList } from '@/app/components/todoList';
import { seedTodos } from '@/app/components/AddTodo';


export default function Home() {

  return (
      <div>
        <TodoList/>
      </div>
  );
}