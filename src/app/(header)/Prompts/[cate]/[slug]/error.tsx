"use client"
const error = (e: Error) => {
  console.log(e)
  return (
    <div>error
      {JSON.stringify(e)}
    </div>
  )
}

export default error