import Image from 'next/image'
import { TodoList } from '@/app/components/todoList';
import { seedTodos } from '@/app/components/AddTodo';
//import { useRouter } from 'next/router';
import { redirect } from "next/navigation"

const handleRedirect = async() => {
  'use server'
  redirect("/"); // Redirect to the desired page
};
export default function Home() {
  //const router = useRouter();
  
  return (
      <div>
        <TodoList router={handleRedirect}/>
      </div>
  );
}