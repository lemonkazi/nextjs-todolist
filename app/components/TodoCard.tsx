"use client";

import { GetResult } from "@prisma/client/runtime/library";
import { updateComplete } from "./AddTodo";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

function handleComplete(id: number, comp: boolean) {
    updateComplete(id, comp);
  }

export default function TodoCard({
  index,
  id,
  title,
  body,
  due,
  comp,
}: {
  index: number;
  id: number;
  title: string;
  body: string;
  due: string;
  comp: boolean;
}) {
  return (
    <div key={index} className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
            <h4 className="text-xl font-medium text-gray-700">{title} {comp? " : Complete" : ""}</h4>
            <p className="text-base text-center text-gray-500">{body}</p>
            <small>{due}</small>
            <input
              key={index}
              id={index + ": complete"}
              name="completedCheck"
              type="checkbox"
              checked={comp}
              onChange={() => handleComplete(index, comp)}
            />
          </div>
  );
}