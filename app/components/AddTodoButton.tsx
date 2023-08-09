'use client'

import { useEffect, useState } from "react"
import TodoFormModal from "./todoForm";




export default function AddButton() {
    const [formOpen, setFormOpen] = useState(false);

    function setOpen(set: boolean) {
      setFormOpen(set);
    }
    

    const handleAddTodo = (e: any) => {
   
    }
    
  return (
    <div>
      <button className="bg-grey-lightest rounded p-2 shadow-md text-3xl font-normal text-yellow-darker" onClick={() => setFormOpen(true)}>Add Todo</button>
      <br />
      {formOpen && <TodoFormModal open={formOpen} setOpen={setOpen} onSubmit={handleAddTodo} />}
    </div>
  );
}