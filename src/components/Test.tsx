"use client"

import { callModal } from "./layout/Modal"

const Test = () => {
  return (
    <div>
        <button onClick={() => callModal("hi")}>click</button>
    </div>
  )
}

export default Test