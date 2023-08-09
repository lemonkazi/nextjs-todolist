'use client'

import { resetData, seedTodos } from "./AddTodo";




async function reset() {
    await resetData().finally(() => seedTodos());
  }

export default function() {
    return (
<h1>
        <button onClick={reset}>
          ResetData
        </button>
      </h1>
    )
}