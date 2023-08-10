"use client";
import { useState } from "react";
import { updateComplete } from "./AddTodo";
export default function TodoCard({
  index,
  id,
  title,
  body,
  due,
  comp,
}: {
  index: number;
  id: string;
  title: string;
  body: string;
  due: string;
  comp: boolean;
}) {

  const [isComplete, setIsComplete] = useState(comp);
  const handleComplete = async () => {
    const updatedComp = !isComplete; // Toggle the completion status
    setIsComplete(updatedComp); // Update the local state
    await updateComplete(id, isComplete); // Update the completio
  };
  return (
    <div key={index} className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
            <h4 className="text-xl font-medium text-gray-700">{title} {isComplete ? " : Complete" : ""}</h4>
            <p className="text-base text-center text-gray-500">{body}</p>
            <small>{due}</small>
            <input
              key={index}
              id={index + ": complete"}
              name="completedCheck"
              type="checkbox"
              checked={isComplete}
              onChange={handleComplete}
            />
          </div>
  );
}