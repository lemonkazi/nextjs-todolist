'use client'

import { useEffect, useState } from "react"
import TodoFormModal from "./todoForm";
import { createTodo } from './AddTodo';


export default function AddButton({router}:any) {
    const [formOpen, setFormOpen] = useState(false);
    //const router = useRouter();

    const handleAddTodo = async (data: FormData) => {
        const title = data.get("title")?.valueOf();
        if (typeof title !== "string" || title.length === 0) {
          throw new Error("Invalid Title")
        }
        const due = data.get("dueDateCheck")?.valueOf() == 'on' && data.get("due")?.valueOf() ? data.get("due")?.valueOf() : ''; 
        const details = data.get("details")?.valueOf() ? data.get("details")?.valueOf() : ''; 
        // Call createTodo here with the required parameters
        try {
            await createTodo(title, details, due, false);
            router();
            //router.push("/"); // Redirect to the desired page
        } catch (error) {
            // Handle error
        }
    }
    
  return (
    <div>
      <button className="bg-grey-lightest rounded p-2 shadow-md text-3xl font-normal text-yellow-darker" onClick={() => setFormOpen(true)}>Add Todo</button>
      <br />
      {formOpen && <TodoFormModal open={formOpen} setOpen={setFormOpen} onSubmit={handleAddTodo} />}
    </div>
  );
}