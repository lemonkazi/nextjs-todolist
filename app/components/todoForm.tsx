'use client'

import { useState } from "react";
import useIsClickOut from "../hooks/OutsideClick";

export default function TodoFormModal({ onSubmit, setOpen, open }: any) {

    const [needDate, setNeedDate] = useState(false);

const [eleCallBack] = useIsClickOut(setOpen)
     
return !open ? null : (
   <div className="modal" ref={eleCallBack}>
    <form action={onSubmit}>
      <div className="form-group flex flex-wrap w-full">
        <div
          className="relative mb-3 w-full px-2"
        >
          <label
            htmlFor="titleInput"
            className="text-gray-700 dark:text-gray-300 font-semibold text-sm"
          >
            Title
            <span className="text-red-500 required-dot">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="rounded-lg border-gray-300 flex-1 appearance-none border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 dark:bg-notion-dark-light dark:text-gray-300 dark:placeholder-gray-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent focus:ring-opacity-100"
            
          />
        </div>
        <div className="relative mb-3 w-full px-2">
          <label
            htmlFor="detailsInput"
            className="text-gray-700 dark:text-gray-300 font-semibold text-sm"
          ></label>
          <textarea
            id="details"
            name="details"
            placeholder="Enter details"
            className="resize-y rounded-lg border-gray-300 flex-1 appearance-none border border-gray-300 dark:border-gray-600 w-full py-2 px-4 bg-white text-gray-700 dark:bg-notion-dark-light dark:text-gray-300 dark:placeholder-gray-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent focus:ring-opacity-100"
          ></textarea>
        </div>
        <div className="relative mb-3 w-full px-2">
          <div className="flex items-center">
            <input
              id="dueDateCheck"
              name="dueDateCheck"
              type="checkbox"
              className="rounded border-gray-500 cursor-pointer w-5 h-5"
              checked={needDate}
              onChange={() => setNeedDate(!needDate)}
            />
            <label
              htmlFor="dueDateCheck"
              className="text-gray-700 dark:text-gray-300 ml-2"
            >
              Has Due Date
            </label>
          </div>
          <div className="relative mb-3 w-full sm:w-1/2 px-2" style={{display: needDate? "block" : "none"}}>
            <label htmlFor="datePicker" className="text-gray-700 dark:text-gray-300 font-semibold text-sm"> 
            Due
            </label>
            <div className="flex">
                <input id="datePicker" name="due" data-date-format="YYYY-MM-DD" min="2023-07-25" type="date" className="border border-gray-300 dark:bg-notion-dark-light dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-300 flex-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-opacity-100 placeholder-gray-400 px-4 py-2 rounded-lg shadow-sm text-base text-black text-gray-700 w-full" />
            </div>
                <small className="text-gray-400 dark:text-gray-500">
                    <span className="field-help">
                        <p>
                            Enter the items due date
                        </p>
                    </span>
                </small>
            </div>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <button
          type="submit"
          className="btn mt-2 px-8 mx-1 py-2 px-4 text-base transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg filter hover:brightness-110"
        >
          Add Item
        </button>
      </div>
    </form>
    </div>
  );
}