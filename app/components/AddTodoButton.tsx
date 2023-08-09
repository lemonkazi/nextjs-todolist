'use client'

import { useEffect, useState } from "react"
import TodoFormModal from "./todoForm";

import { createTodo } from './AddTodo';


export default function AddButton() {
    const [formOpen, setFormOpen] = useState(false);
    

    const handleAddTodo = async () => {
        // Call createTodo here with the required parameters
        try {
            await createTodo("Your Todo Title", "Your Todo Body", new Date(), false);
            // Handle success or other logic
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